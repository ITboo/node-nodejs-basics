import { fork } from 'child_process';

import { getPath } from '../common/helpers.js';

const cpPath = getPath(import.meta.url, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    fork(cpPath, args);
    console.log('Hello! To check this subtask put anything into console. You will see message from child process.\nPress Ctrl+C to exit\n')
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['first', 'second', 2024]);