import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter something ', value => {
  console.log(value);
  console.log(value.split('').reverse().join(''));
  rl.close();
});
