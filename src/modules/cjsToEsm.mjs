import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';
import { createRequire } from 'module';
import './files/c.js';

const require = createRequire(import.meta.url);
const random = Math.random();
let unknownObject;

if (random > 0.5) {
    unknownObject = require("./files/a.json");
} else {
    unknownObject = require("./files/a.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer};

//test 
console.log(unknownObject);
createMyServer.listen(3000);
