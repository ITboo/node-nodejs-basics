import { rename as fsRename } from 'fs/promises';

import { checkIfExist, getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const DIR = "files";
const WRONG_FILENAME = "wrongFilename.txt";
const PROPER_FILENAME = "properFilename.md";

const path = getPath(import.meta.url, DIR, WRONG_FILENAME);
const newPath = getPath(import.meta.url, DIR, PROPER_FILENAME);

const rename = async () => {
    try {
        const isFileExists = await checkIfExist(newPath);
        if (isFileExists) {
            throw new Error(`${FS_ERROR_MSG}: this file already exists`);
        }
        await fsRename(path, newPath);
        console.log('File has been successfully renamed!');
    } catch {
        throw new Error(FS_ERROR_MSG);
    }
};

await rename();