/*
    oblicz i wyświetl sumę dwóch argumentów programu sum.js
    np.
    node sum.js 2 5
    powinno wyświetlić
    7
*/
const liczbaA = Number(process.argv[2])
const liczbaB = process.argv[3]

console.log(liczbaA + Number(liczbaB))
