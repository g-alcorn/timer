// let timeouts = [];
// if (process.argv.length > 2) {
//   for (let i = 2; i < process.argv.length; i++) {
//     if (process.argv[i] > 0 && !Number.isNaN(process.argv[i])) {
//       timeouts.push(process.argv[i]);
//     }  
//   }

//   for (let i = 0; i < timeouts.length; i++) {
//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, timeouts[i] * 1000);
//   }
// }

const stdin = process.stdin;
const stdout = process.stdout;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }

  if (key === 'b') {
    stdout.write('\x07');
  }

  if (!Number.isNaN(key)) {
    stdout.write(`Starting timer for ${key} seconds...\n`);
    setTimeout(() => {
      stdout.write('\x07');
    }, key * 1000);
  }
});