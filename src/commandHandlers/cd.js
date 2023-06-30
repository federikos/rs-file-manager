import { INVALID_INPUT } from '../consts.js'

export function cdHandler(args) {
  if (!args.length || args.length > 1) {
    console.log(INVALID_INPUT);
    return;
  }

  process.chdir(args[0]);
}