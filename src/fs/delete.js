import { rm } from 'fs/promises';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const DIR = "files";
const FILENAME = "fileToRemove.txt";
const path = getPath(import.meta.url, DIR, FILENAME);

const remove = async () => {
    try {
        await rm(path);
        console.log('File has been successfully deleted!')
    } catch {
        throw new Error(FS_ERROR_MSG);
    }
};

await remove();