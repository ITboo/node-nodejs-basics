import { readFile } from 'fs/promises';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const DIR = "files";
const FILENAME = "fileToRead.txt";
const ENCODING = "utf8";
const path = getPath(import.meta.url, DIR, FILENAME);

const read = async () => {
    try {
        const content = await readFile(path, ENCODING);
        console.log(content);
    } catch {
        throw new Error(FS_ERROR_MSG);
    }
};

await read();