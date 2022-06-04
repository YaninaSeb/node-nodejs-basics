import * as path from 'path';
import { createWriteStream } from 'fs';

export const write = async () => {
    const __dirname = path.resolve(path.dirname(""));
    const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(pathToFile);

    process.stdout.write('Please, enter text...\n');

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    });
};
