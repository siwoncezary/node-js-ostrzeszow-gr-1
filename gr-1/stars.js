/*
    node stars.js 2 3 1
efekt
**
***
*
*/

const arr = process.argv.splice(2, process.argv.length - 2)
const tablica = ['banana', 3, 4, 6 , 7];
const liczby = tablica.splice(1, tablica.length - 1)
for(let i = 0; i < arr.length; i++){
    const size = arr[i]
    let stars = ''
    for(let j = 0; j < size; j++){
        stars = stars + '*'
    }
    console.log(stars)
}