import { INVALID_INPUT } from '../consts.js'
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

export function hashHandler(args) {
  if (args.length !== 1) {
    console.log(INVALID_INPUT);
    return;
  }
  
const hash = createHash('sha256');
const input = createReadStream(args[0]);

input.on('readable', () => {
    const data = input.read();
    if (data) {
        hash.update(data);
    } else {
        console.log(hash.digest('hex'));
    }
})
}