import { cp } from 'fs/promises';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const sourcePath = getPath(import.meta.url, 'files');
const copyPath = getPath(import.meta.url, 'files_copy');

const copy = async () => {
    try {
        await cp(sourcePath, copyPath, {
            recursive: true,
            force: false,
            errorOnExist: true,
        });
        console.log('Directory has been successfully dublicated!')
    } catch {
        throw new Error(FS_ERROR_MSG);
    }
};

await copy();
