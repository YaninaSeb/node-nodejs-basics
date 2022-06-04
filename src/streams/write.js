import * as path from 'path';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(_filename);

export const write = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(pathToFile);

    process.stdout.write('Please, enter text...\n');

    process.stdin.pipe(writeStream);
};

//test
await write();
