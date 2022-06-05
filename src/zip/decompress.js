import path from 'path';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(_filename);

export const decompress = async () => {
    const pathToZip = path.join(__dirname, 'files', 'archive.gz');
    const pathToDecompressFile = path.join(__dirname, 'files', 'fileToCompress2.txt');

    const unzip = zlib.createGunzip();
    const source = createReadStream(pathToZip);
    const destination = createWriteStream(pathToDecompressFile);

    return pipeline(source, unzip, destination, (err) => {
        if (err) {
            console.error('Error:', err);
            process.exitCode = 1;
        }
    });
};

//test
await decompress();
