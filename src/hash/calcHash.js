import * as path from 'path';
import { createReadStream } from 'fs';
const { createHash } = await import('crypto');

export const calculateHash = async () => {
    const __dirname = path.resolve(path.dirname(""));
    const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const hash = createHash('sha256');

    const input = createReadStream(pathToFile);

    input.on('data', (chunk) => {
        hash.update(chunk);
    });

    return new Promise((resolve) => {
        input.on('end', () => {
            resolve(hash.digest("hex"));
        });
    });

};
