import { rename as renameFile } from "fs/promises";
import * as path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(_filename);

export const rename = async () => {
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await renameFile(oldPath, newPath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

//test
await rename();
