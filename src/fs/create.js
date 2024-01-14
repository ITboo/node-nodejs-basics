import { writeFile } from 'fs/promises';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js'

const path = getPath(import.meta.url, 'files', 'fresh.txt');
const data = 'I am fresh and young';

const create = async () => {
    try {
        await writeFile(path, data, { flag: 'wx' });
        console.log('File has been successfully created!')
    } catch {
        throw new Error(FS_ERROR_MSG);
    }
};

await create();