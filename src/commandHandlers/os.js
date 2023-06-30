import { INVALID_INPUT } from '../consts.js';
import { EOL, cpus, homedir, userInfo, arch } from 'node:os';

export async function osHandler(args) {
  if (args.length !== 1) {
    console.log(INVALID_INPUT);
    return;
  }

  switch(args[0]) {
    case '--EOL':
      console.log(EOL);
      break;
    case '--cpus':
      const cpusInfo = cpus().map((cpu) => ({ 
        model: cpu.model.trimEnd(), 
        'clock rate': `${(cpu.speed / 1000).toFixed(2)} GHz`
      }))
      console.log(`${cpus().length} overall`)
      console.table(cpusInfo);
      break;
    case '--homedir':
      console.log(homedir());
      break;
    case '--username':
      console.log(userInfo().username)
      break;
    case '--architecture':
      console.log(arch());
      break;
    default:
      console.log(INVALID_INPUT);
  }
}