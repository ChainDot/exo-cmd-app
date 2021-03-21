const readlineSync = require('readline-sync')


const Q1 = 'Question 1: Le C++ est un:'
const Q2 = 'Question 2: TypeScript est une évolution de Javascript:' 
const Q3 = 'Question 3: Lire les cours avant de faire les exercices est inutile:'
const Q4 = 'Question 4: react.js a été developpé par Google:'
const Q5 = 'Question 5: Ethereum est une blockchain publique:'

const arrayChoice1 = ['1: langage','2: compilateur']
const arrayChoice2 = ['1: Vrai','2: Faux']

let index1 = readlineSync.keyInSelect(arrayChoice1, Q1)
let index2 = readlineSync.keyInSelect(arrayChoice2, Q2)
let index3 = readlineSync.keyInSelect(arrayChoice2, Q3)
let index4 = readlineSync.keyInSelect(arrayChoice2, Q4)
let index5 = readlineSync.keyInSelect(arrayChoice2, Q5)

let counter = 0

switch (index1) {
  case 0:
    counter++
    break
  case 1:
    counter
    break
}

switch (index2) {
  case 0:
    counter++
    break
  case 1:
    counter
    break
}

switch (index3) {
  case 0:
    counter
    break
  case 1:
    counter++
    break
}

switch (index4) {
  case 0:
    counter
    break
  case 1:
    counter++
    break
}

switch (index5) {
  case 0:
    counter++
    break
  case 1:
    counter
    break
}
console.log(`vous avez une note de ${counter}/5`)



