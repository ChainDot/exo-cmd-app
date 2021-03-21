const readlineSync = require('readline-sync')
let firstName = readlineSync.question("Bonjour, Votre prénom s'il vou plait: ")
let LastName = readlineSync.question('Votre nom également:')
let age = readlineSync.question('votre age:')




//function
const majority = (firstName, LastName, age) => {
  if(age < 18){
    console.log(`Désolé, ${firstName} ${LastName}, vous êtes mineur, nous ne pouvez pas voter`)
  } else if ( age >= 18) {
    console.log(`Merci, ${firstName} ${LastName}, vous êtes majeur, vous pouvez voter`)
  } else {
    console.log('erreur, veuillez entrer un nombre')
  }
}



majority(firstName, LastName, age)