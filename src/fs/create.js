import * as fs from 'fs';
import * as path from 'path';

export const create = async () => {
    const __dirname = path.resolve(path.dirname(""));
    const filename = path.join(__dirname, 'files', 'fresh.txt');
    const text = 'I am fresh and young';

    try {
        await fs.promises.writeFile(filename, text, { flag: 'wx'})
    } catch (err) {
        throw new Error('FS operation failed');
    }
}

create();
