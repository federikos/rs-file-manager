import { INVALID_INPUT } from '../consts.js'

export function upHandler(args) {
  if (args.length) {
    console.log(INVALID_INPUT);
    return;
  }
  process.chdir('..');
}