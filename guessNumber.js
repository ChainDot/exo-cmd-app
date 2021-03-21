const chalk = require('chalk')
const readlineSync = require('readline-sync')
const NBcommand = process.argv[2]


//check command line

if(process.argv.length !== 3){
  console.log('usage: node guessNumber.js number')
  process.exit(1)
}

if(isNaN(NBcommand)){
  console.log(`${NBcommand} should be a number`)
  process.exit(1)
}

//Main
  while(true){
 const nbGuess = Number(readlineSync.question('Make a guess ?'))
  //cases
  if(isNaN(nbGuess)){
    console.log(`it should be a number`)
  } else if(nbGuess < NBcommand){
    console.log(chalk.red(`you're way off, it should be higher`))
  } else if (nbGuess > NBcommand) {
    console.log(chalk.red('it should be lower'))
  } else {
    console.log(chalk.green('Nice spot on!'))
    process.exit(1)
  }
  } 

  





