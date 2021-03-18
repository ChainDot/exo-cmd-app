const pyramid = (nb, str,reverse) => {
  str = process.argv[3]
  reverse = process.argv[4]
  if(process.argv.length === 5 && process.arg[4] === '-r'){
  for (let i = nb; i >= 1; --i) {
    console.log(str.repeat(i))
  }
  } else {
    for (let i = 1; i <= nb; ++i) {
      console.log(str.repeat(i))
      }
    }
  }
if(process.argv.length !== 4){
  console.log('usage: node Pyramid.js number string')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}


let res = Number(process.argv[2])

pyramid(res)

