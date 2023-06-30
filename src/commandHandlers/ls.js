import fs from 'node:fs/promises';
import process from 'node:process';
import { INVALID_INPUT } from '../consts.js'

export async function lsHandler(args) {
  if (args.length) {
    console.log(INVALID_INPUT);
    return;
  }

  try {
      const files = await fs.readdir(process.cwd(), { withFileTypes: true });
      const fileNames = files
        .map(nextFile => ({ 
          name: nextFile.name, 
          type: nextFile.isDirectory() ? 'directory' : 'file'
        }))
        .concat()
        .sort((a, b) => {
          if (a.type === 'directory' && b.type === 'file') return -1;
          if (a.type === 'file' && b.type === 'directory') return 1;
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        })
      console.table(fileNames);
  } catch(e) {
    console.log(e);
      throw new Error('FS operation failed');
  }
}