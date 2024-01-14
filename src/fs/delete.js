import { rm } from 'fs/promises';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const path = getPath(import.meta.url, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await rm(path);
        console.log('File has been successfully deleted!')
    } catch {
        throw new Error(FS_ERROR_MSG);
    }
};

await remove();