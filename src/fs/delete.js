import { unlink } from "fs/promises";
import * as path from 'path';

export const remove = async () => {
    const __dirname = path.resolve(path.dirname(""));
    const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await unlink(pathToFile);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};
