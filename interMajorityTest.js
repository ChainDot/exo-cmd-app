const readlineSync = require('readline-sync')

//Check Command line

if(process.argv.length !== 3){
  console.log('usage: node interMajorityTest.js age')
  process.exit(1)
}

if(isNaN(process.argv[2])){
  console.log(`usage: node interMajority.js number`)
  process.exit(1)
}

// main
while(true){
  let firstName = readlineSync.question("Bonjour, Votre prénom s'il vou plait: ")
  let LastName = readlineSync.question('Votre nom également:')
  let age = readlineSync.question('votre age:') 
  let MajAge = Number(process.argv[2])
  
// check exit case

if(isNaN(age)){
  console.log(`Désolé, ${age} doit être un nombre`)
  process.exit(1)
}

if (age >= MajAge){
  console.log(`Merci, ${firstName} ${LastName}, vous êtes majeur, vous pouvez voter`)
  process.exit(1)
} else {
  console.log(`Désolé, ${firstName} ${LastName}, vous êtes mineur, nous ne pouvez pas voter`)
  process.exit(1)
}
}

