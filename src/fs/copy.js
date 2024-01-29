import { cp } from 'fs/promises';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const SOURCE_DIRECTORY_NAME = "files";
const DEST_DIRECTORY_NAME = "files_copy";

const sourcePath = getPath(import.meta.url, SOURCE_DIRECTORY_NAME);
const copyPath = getPath(import.meta.url, DEST_DIRECTORY_NAME);

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
