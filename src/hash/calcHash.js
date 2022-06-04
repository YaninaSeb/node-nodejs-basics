import * as path from 'path';
import { createReadStream } from 'fs';
const { createHash } = await import('crypto');
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(_filename);

export const calculateHash = async () => {
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

//test
console.log(await calculateHash());
