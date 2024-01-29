import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

import { getPath } from '../common/helpers.js';
import { ZLIB_ERROR_MSG } from '../common/constants.js';

const DIR = 'files';
const FILE_NAME = 'fileToCompress.txt';
const ARCHIVE_NAME = 'archive.gz';

const filePath = getPath(import.meta.url, DIR, FILE_NAME);
const archivePath = getPath(import.meta.url, DIR, ARCHIVE_NAME);

const compress = async () => {
    try {
        const fileToCompress = createReadStream(filePath);
        const gzip = createGzip();
        const archive = createWriteStream(archivePath);

        fileToCompress.pipe(gzip).pipe(archive);
        console.log('File has been successfully compressed!')
    } catch {
        throw new Error(ZLIB_ERROR_MSG);
    }
};

await compress();