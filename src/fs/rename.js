import { rename as renameFile } from "fs/promises";
import * as path from 'path';

export const rename = async () => {
    const __dirname = path.resolve(path.dirname(""));
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await renameFile(oldPath, newPath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};
