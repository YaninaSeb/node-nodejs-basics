import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const _filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(_filename);

export const compress = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathToCompressFile = path.join(__dirname, 'files', 'archive.gz');

    const gzip = createGzip();
    const source = createReadStream(pathToFile);
    const destination = createWriteStream(pathToCompressFile);

    source.pipe(gzip).pipe(destination);
};

//test
await compress();
