import { readdir } from 'fs/promises';

import { getPath } from '../common/helpers.js';
import { FS_ERROR_MSG } from '../common/constants.js';

const DIR = "files";
const path = getPath(import.meta.url, DIR);

const list = async () => {
  try {
    const list = await readdir(path, { withFileTypes: true });
    const sortedList = list.filter((file) => file.isFile()).map((file) => file.name);
    console.log(sortedList);
  } catch {
    throw new Error(FS_ERROR_MSG);
  }
};

await list();