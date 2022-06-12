import { readdir } from "fs/promises";
import * as path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(_filename);

export const list = async () => {
    const pathToDir = path.join(__dirname, 'files');

    try {
       let res = await readdir(pathToDir);
       console.log(res);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

//test
await list();
