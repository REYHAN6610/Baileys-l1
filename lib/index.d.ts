import { proto } from '../WAProto';
import makeWASocket from './Socket';
import chalk from 'chalk';
import gradient from 'gradient-string';
import { version } from '../package.json';

// Clear console
console.log('\x1Bc\x1B[3J');
console.log();
console.clear();

/*
Don't Change the Console below, Because you don't have the right!!
*/

const art = `
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀⢀⡴⠂
⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠛⠛⠛⠻⣿⠟⠉⠀⠀⣠⣾⠏⠀⠀
⠀⠀⠀⠀⢀⣾⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⣀⣴⣿⡿⠃⠀⠀⠀NAME: Baileys-L1
⠀⠀⠀⢀⣾⣿⣿⣿⠁⠀⠀⠀⠀⢀⣠⣾⣿⣿⣿⠃⠀⠀⠀⠀VERSION: ${version}
⠀⠀⢀⣾⣿⣿⣿⠃⠀⠀⠀⣠⣴⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀LICENSE: MIT
⠀⢀⣾⣿⡿⠛⠁⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀
⢀⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
\n`;

console.log(gradient.passion.multiline(art));
console.log(`\x1b[45m\x1b[32m © 2025-2027 \x1b[0m`);

setTimeout(() => {
  process.stdout.write('\x1Bc\x1B[3J');
}, 3500);

export * from '../WAProto';
export * from './Utils';
export * from './Types';
export * from './Store';
export * from './Defaults';
export * from './WABinary';
export * from './WAM';
export * from './WAUSync';

export type WASocket = ReturnType<typeof makeWASocket>;

export { makeWASocket, proto };
export default makeWASocket;