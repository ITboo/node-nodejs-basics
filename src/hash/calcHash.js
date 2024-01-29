import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const DIR = 'files';
const FILE_NAME = 'fileToCalculateHashFor.txt';
const path = getPath(import.meta.url, DIR , FILE_NAME);

const calculateHash = async () => {
    try {
        const buffer = await readFile(path);
        const hash = createHash('sha256').update(buffer).digest('hex');
        console.log("Hash: ", hash);
    } catch {
        throw new Error(FS_ERROR_MSG);
    }
};

await calculateHash();