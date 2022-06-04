import { readFile } from "fs/promises";
import * as path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(_filename);

export const read = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        let res = await readFile(pathToFile, {encoding: "utf-8"});
        console.log(res);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

//test 
await read();
