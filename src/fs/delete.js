import { unlink } from "fs/promises";
import * as path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(_filename);

export const remove = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await unlink(pathToFile);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

//test
await remove();
