
const arr = process.argv.splice(2, process.argv.length - 2)
const sum = arr.reduce((ac, i) => {return Number(ac) + Number(i)})
console.log(sum)