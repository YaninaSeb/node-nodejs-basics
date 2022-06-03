import { readdir } from "fs/promises";
import * as path from 'path';

export const list = async () => {
    const __dirname = path.resolve(path.dirname(""));
    const pathToDir = path.join(__dirname, 'files');

    try {
       let res = await readdir(pathToDir);
       console.log(res);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};
