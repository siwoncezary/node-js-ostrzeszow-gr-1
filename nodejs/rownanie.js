/*
Napisz program obliczający równanie kwadratowe
rownanie a b c x
które oblicza 
a * x * x + b * x + c
przykładowe wywołanie
node rownanie.js 1 2 3 1
powinno wyświetlic
6
*/

const aParam = process.argv[2]
const bParam = process.argv[3]
const cParam = process.argv[4]
const xParam = process.argv[5]

if (aParam && bParam && cParam && xParam){
    if (!isNaN(aParam) && !isNaN(bParam) && !isNaN(cParam) && !isNaN(cParam)){
        const a = Number(aParam);
        const b = Number(bParam);
        const c = Number(cParam);
        const x = Number(xParam);
    
        console.log(a * x**2 + b * x + c)
    } else {
        console.log("Wszystkie parametry muszą być liczbą! Co najmniej nie z nich jest liczbą!")
    }
} else{
    //TODO opis działania i korzystania z programu
    console.log("Brak wymaganych parametrów! Wpisz cztery liczby.")
}

