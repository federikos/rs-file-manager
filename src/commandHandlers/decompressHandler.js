import { INVALID_INPUT } from '../consts.js';
import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

export async function decompressHandler(args) {
  if (args.length !== 2) {
    console.log(INVALID_INPUT);
    return;
  }

  const pathToFile = args[0];
  const pathToDestination = args[1];
  const filename = path.basename(pathToFile);
  const pathToNewFile = path.join(pathToDestination, filename.slice(0, filename.lastIndexOf('.')));

  const decompressStream = createBrotliDecompress();
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToNewFile);
  await pipeline(source, decompressStream, destination);
}