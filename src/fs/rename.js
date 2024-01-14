import { rename as fsRename} from 'fs/promises';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const path = getPath(import.meta.url, 'files', 'wrongFilename.txt');
const newPath = getPath(import.meta.url, 'files', 'properFilename.md');

const rename = async () => {
    try {
        await fsRename(path, newPath);
        console.log('File has been successfully renamed!');
    } catch {
        throw new Error(FS_ERROR_MSG);
    }
};

await rename();