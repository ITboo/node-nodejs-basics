import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

import { getPath } from '../common/helpers.js';
import { ZLIB_ERROR_MSG } from '../common/constants.js';

const filePath = getPath(import.meta.url, 'files', 'fileToCompress.txt');
const archivePath = getPath(import.meta.url, 'files', 'archive.gz');

const decompress = async () => {
  try {
    const archive = createReadStream(archivePath);
    const unzip = createUnzip();
    const decompress = createWriteStream(filePath);

    archive.pipe(unzip).pipe(decompress);
    console.log('Archive has been successfully decompressed!')
  } catch {
    throw new Error(ZLIB_ERROR_MSG);
  }
};

await decompress();