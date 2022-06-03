import * as path from 'path';
import { writeFile } from "fs/promises";

export const create = async () => {
    const __dirname = path.resolve(path.dirname(""));
    const pathToFile = path.join(__dirname, 'files', 'fresh.txt');
    const text = 'I am fresh and young';

    try {
        await writeFile(pathToFile, text, { flag: 'wx'})
    } catch (err) {
        throw new Error('FS operation failed');
    }
}
