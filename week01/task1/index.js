const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const main = ( ) =>  rl.question('Please enter something ', value => {
  console.log(value);
  console.log(value.split('').reverse().join(''));
  main()
});

main()

