import { cpus } from 'os';
import { Worker } from 'worker_threads';

import { getPath } from '../common/helpers.js';

const cpusNum = cpus().length;
const FILE_NAME ='worker.js'
const path = getPath(import.meta.url, FILE_NAME);
const startsFrom = 10;

const createWorkers = (num, path, startsFrom) => {
    const workerPromises = [];

    for (let i = 0; i < num; i += 1) {
        workerPromises.push(
            new Promise((res, rej) => {
                const workerData = startsFrom + i;
                const worker = new Worker(path, { workerData });

                worker.on('message', res);
                worker.on('error', rej);
            })
        );
    }

    return workerPromises;
};

const checkResults = (workersResults) => {
    return workersResults.map((workerResult) => {
        let status;
        let data;

        switch (workerResult.status) {
            case 'fulfilled':
                status = 'resolved';
                data = workerResult.value;
                break;
            case 'rejected':
                status = 'error';
                data = null;
                break;
        }

        return { status, data };
    });
};


const performCalculations = async () => {
    const workers = createWorkers(cpusNum, path, startsFrom);
    const workersResults = await Promise.allSettled(workers);
    const result = checkResults(workersResults);

    console.log(result);
};

await performCalculations();
