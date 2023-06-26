import { INVALID_INPUT } from '../consts.js';
import { rename } from 'node:fs/promises'

export async function rnHandler(args) {
  if (args.length !== 2) {
    console.log(INVALID_INPUT);
    return;
  }

  const file = await rename(args[0], args[1]);
}