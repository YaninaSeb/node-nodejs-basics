import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// This function sends result of nthFibonacci computations to main thread
export const sendResult = () => {
    const data = nthFibonacci(workerData);
    parentPort.postMessage(data);
};

//test
sendResult();
