import { INVALID_INPUT } from '../consts.js';
import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

export async function compressHandler(args) {
  if (args.length !== 2) {
    console.log(INVALID_INPUT);
    return;
  }

  const pathToFile = args[0];
  const pathToDestination = args[1];
  const filename = path.posix.basename(pathToFile);
  const pathToNewFile = path.join(pathToDestination, filename + '.br');

  const compressStream = createBrotliCompress();
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToNewFile);
  await pipeline(source, compressStream, destination);
}