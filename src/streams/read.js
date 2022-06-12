import * as path from 'path';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(_filename);

export const read = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
    const readStream = createReadStream(pathToFile);
    let text = '';

    readStream.on('data', (chunk) => {
        text += chunk;
    });
    readStream.on('end', () => {
        process.stdout.write(text + '\n');
    });
};

//test
await read();
