import { readFile } from "fs/promises";
import * as path from 'path';

export const read = async () => {
    const __dirname = path.resolve(path.dirname(""));
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        let res = await readFile(pathToFile, {encoding: "utf-8"});
        console.log(res);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};
