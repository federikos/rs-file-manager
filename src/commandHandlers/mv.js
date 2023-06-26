import { INVALID_INPUT } from '../consts.js';
import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';

export async function mvHandler(args) {
  if (args.length !== 2) {
    console.log(INVALID_INPUT);
    return;
  }

  const pathToFile = args[0];
  const pathToNewDirectory = args[1];
  const filename = path.posix.basename(pathToFile);
  const pathToNewFile = path.join(pathToNewDirectory, filename);

  const readableStream = createReadStream(pathToFile);
  const writableStream = createWriteStream(pathToNewFile);
  readableStream.pipe(writableStream);
  readableStream.on('end', async () => {
    await rm(pathToFile);
  })
}