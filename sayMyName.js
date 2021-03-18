// condition 1
if(process.argv.length !== 3){
  console.log('usage: node sayMyName.js string')
  process.exit(1)
}

// condition 2
if(!isNaN(process.argv[2])){
  console.log('usage: node sayMyName.js string')
  process.exit(1)
}

let str = process.argv[2]
console.log(`My name is ${str}.`)