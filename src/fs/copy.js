import * as path from 'path';
import { mkdir, readdir, copyFile, access } from "fs/promises";
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(_filename);

const copyFiles = async () => {
    const pathToDir = path.join(__dirname, 'files');

    try {
        let allFiles = await readdir(pathToDir);
        allFiles.forEach((file) => {
            const oldPath = path.join(__dirname, 'files', `${file}`);
            const newPath = path.join(__dirname, 'files_copy', `${file}`);
            copyFile(oldPath, newPath);
        });
    } catch (err) {
        throw new Error();
    }
}

export const copy = async () => {
    const pathToDir = path.join(__dirname, 'files');

    try {
        await access(pathToDir); 
        await mkdir(path.join(__dirname, 'files_copy'));
        await copyFiles();

    } catch (err) {
        throw new Error('FS operation failed');
    }
};

//test
await copy();
