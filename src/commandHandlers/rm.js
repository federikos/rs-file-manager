import { INVALID_INPUT } from '../consts.js';
import { rm } from 'node:fs/promises';

export async function rmHandler(args) {
  if (args.length !== 1) {
    console.log(INVALID_INPUT);
    return;
  }

  const pathToFile = args[0];
  await rm(pathToFile);
}