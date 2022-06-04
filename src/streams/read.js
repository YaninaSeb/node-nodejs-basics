import * as path from 'path';
import { createReadStream } from 'fs';

export const read = async () => {
    const __dirname = path.resolve(path.dirname(""));
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
