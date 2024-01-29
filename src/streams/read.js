import { createReadStream } from 'fs';
import { stdout } from 'process';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const DIR ='files';
const FILE_NAME = 'fileToRead.txt';
const path = getPath(import.meta.url, DIR, FILE_NAME);

const read = async () => {
    const stream = createReadStream(path);

    stream.pipe(stdout);

    stream.on('error', () => {
        throw new Error(FS_ERROR_MSG);
    });
};

await read();