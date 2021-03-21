let res = Number(process.argv[2])
let str = process.argv[3]
let r = process.argv[4]


// check command line
if(process.argv.length === 5 && process.argv[4] !== '-r' ){
  console.log('usage: node Pyramid.js number string -r')
  process.exit(1)
}

if(isNaN(process.argv[2])){
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

if(process.argv.length < 4){
  console.log('usage: node Pyramid.js number string')
  process.exit(1)
}

//function
const pyramid = (nb, str,r) => {
  
  if(process.argv.length === 5 && r === '-r'){
  for (let i = nb; i >= 1; --i) {
    console.log(str.repeat(i))
  }
  } else {
    for (let i = 1; i <= nb; ++i) {
      console.log(str.repeat(i))
      }
    }
}



pyramid(res, str,r)


