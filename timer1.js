let timeouts = [];
if (process.argv.length > 2) {
  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i] > 0 && !Number.isNaN(process.argv[i])) {
      timeouts.push(process.argv[i]);
    }  
  }

  for (let i = 0; i < timeouts.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timeouts[i] * 1000);
  }
}