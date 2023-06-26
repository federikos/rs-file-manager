import readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { parseUsername, parseInput } from './helpers.js';
import { INVALID_INPUT, OPERATION_FAILED } from './consts.js';
import { exitHandler } from './commandHandlers/exit.js';
import { upHandler } from './commandHandlers/up.js';
import { cdHandler } from './commandHandlers/cd.js';

const username = parseUsername(process.argv[2]);
const rl = readline.createInterface(stdin, stdout);
printWelcome(username);
printCWD();

function processInput(input) {
  const { command, args } = parseInput(input);

  try {
    switch(command) {
      case '.exit':
        exitHandler(args);
        return;
      case 'up':
        upHandler(args);
        break;
      case 'cd':
        cdHandler(args);
        break;
      default:
        console.log(INVALID_INPUT);
    }
  
    printCWD();
  } catch (e) {
    console.log(OPERATION_FAILED);
  }
}

rl.on('line', processInput);
rl.on('SIGINT', onManagerClose);

export function onManagerClose() {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
}

function printCWD() {
  console.log(`You are currently in ${process.cwd()}`);
}

function printWelcome(username) {
  console.log(`Welcome to the File Manager, ${username}!`);
}