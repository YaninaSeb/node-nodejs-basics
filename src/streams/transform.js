import { Transform } from 'stream';

export const transform = async () => {

    const myTransform = new Transform({
        transform (chunk, _ ,callback) {
            let text = chunk.toString().split('').reverse().slice(1).join('') + '\n';
            callback(null, text);
        }
    });
    process.stdout.write('Please, enter text...\n');
    process.stdin.pipe(myTransform).pipe(process.stdout);
};
