/*
program, który oblicza sumę liczb podanych jako argumenty w linii polecenia
np.
    node baby-step.js 1 4 5
efekt
    10
*/
const bigNumber = 7383298329782395872958734987349873984349873948759384793487934875938476934n
console.log(bigNumber)
const arr = process.argv.splice(2, process.argv.length - 2)
let sum = 0
for(let number of arr){
    sum = sum + Number(number)
}
console.log(sum)
