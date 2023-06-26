import { INVALID_INPUT } from '../consts.js';
import { open, writeFile } from 'node:fs/promises'

export async function addHandler(args) {
  if (args.length !== 1) {
    console.log(INVALID_INPUT);
    return;
  }

  const file = await writeFile(args[0], '', { flag: 'wx'});
}