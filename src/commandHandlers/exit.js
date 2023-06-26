import { onManagerClose } from '../index.js';
import { INVALID_INPUT } from '../consts.js'

export function exitHandler(args) {
  if (args.length) {
    console.log(INVALID_INPUT);
    return;
  }
  onManagerClose();
}