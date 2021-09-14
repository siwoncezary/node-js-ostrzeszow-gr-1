/*
    node stars.js 2 3 1
efekt
**
***
*
*/

const arr = process.argv.splice(2, process.argv.length - 2)
for(let size of arr){
    let stars = ''
    for(let j = 0; j < size; j++){
        stars = stars + '*'
    }
    console.log(stars)
}