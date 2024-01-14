import { readFile } from 'fs/promises';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const path = getPath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const content = await readFile(path, 'utf8');
        console.log(content);
    } catch {
        throw new Error(FS_ERROR_MSG);
    }
};

await read();