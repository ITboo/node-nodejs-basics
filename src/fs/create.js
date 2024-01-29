import { writeFile } from 'fs/promises';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js'

const DATA = 'I am fresh and young';
const DIR = "files";
const FILE_NAME = "fresh.txt";

const path = getPath(import.meta.url, DIR, FILE_NAME);

const create = async () => {
    try {
        await writeFile(path, DATA, { flag: 'wx' });
        console.log('File has been successfully created!')
    } catch {
        throw new Error(FS_ERROR_MSG);
    }
};

await create();