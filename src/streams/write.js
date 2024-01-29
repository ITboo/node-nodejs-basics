import { createWriteStream } from 'fs';
import { stdin } from 'process';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const DIR ='files';
const FILE_NAME = 'fileToWrite.txt';
const path = getPath(import.meta.url, DIR, FILE_NAME);

const write = async () => {
    const stream = createWriteStream(path);

    stdin.pipe(stream);
    console.log('Created a stream. Please, type something into console...\nTo exit press CTRL+C\n');

    stream.on('error', () => {
        throw new Error(FS_ERROR_MSG);
    });
};

await write();