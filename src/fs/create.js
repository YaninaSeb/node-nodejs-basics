import * as path from 'path';
import { writeFile } from "fs/promises";
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(_filename);

export const create = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fresh.txt');
    const text = 'I am fresh and young';

    try {
        await writeFile(pathToFile, text, { flag: 'wx'})
    } catch (err) {
        throw new Error('FS operation failed');
    }
}

//test
await create();
