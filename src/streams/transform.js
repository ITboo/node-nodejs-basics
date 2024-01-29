import { Transform } from 'stream';
import { stdin, stdout } from 'process';

const transform = async () => {
    const stream = new Transform({
        transform(chunk, _, callback) {
            const reverse = chunk.toString().split('').reverse().join('');
            callback(null, `${reverse}\n\n`);
        },
    });

    stdin.pipe(stream).pipe(stdout);
    console.log('Created a stream. Please, type something into console...\nTo exit press CTRL+C\n');
};

await transform();