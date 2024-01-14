import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const getPath = (importMetaUrl, ...args) => {
    const __dirname = dirname(fileURLToPath(importMetaUrl));
    const path = join(__dirname, ...args);
    return path;
};
