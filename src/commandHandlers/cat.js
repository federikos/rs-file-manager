import { INVALID_INPUT } from '../consts.js';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

export function catHandler(args) {
  if (args.length !== 1) {
    console.log(INVALID_INPUT);
    return;
  }

  const fileStream = createReadStream(args[0]);
  fileStream.pipe(stdout);
}