const fs = require('fs')
let car = {
    marka: "audi",
    model: "A4",
    rocznik: 2017,
    silnik:{
        moc: 204,
        pojemnosc: 2.0,
        nrSeryjny: "AVC46783a"
    },
    wlasciciele:["Kowalski", "Nowak"]
}

const cars = [car, {
    marka: "bwm",
    model:" aaa",
    rocznik: 2019,
    silnik: {
        moc: 189,
        pojemnosc: 1.9,
        nrSeryjny: "CCC3345"
    },
    wlasciciele: []
}]
cars.unshift({})
cars.shift()
/*
  0      1     3  
[car1, car2, car3]
0       1
[car2, car3] - usunięcie z początku: shift()
0       1
[car1, car2] - usuniecie ostatniego : pop()
*/
function showCarMark(carsArr){
    for(let car of carsArr){
        console.log(car.marka)
    }
}
/*
    Napisz funkcje showCarDetails, która wyświetli w jednym wierszu
    markę model i pojemność silnika dla każdego samochodu w tablicy
    np.:
    marka: AUDI,  model: A4, pojemnosc:  2.0
    ...
*/
function showCarDetails(carsArr){
    for(let car of carsArr){
        console.log('marka: ' + car.marka + ', model: ' + car.model +', pojemnosc: '
         + car.silnik.pojemnosc)
    }
}
showCarMark(cars)
showCarMark([{marka: "Fiat"}])
//zapis do pliku tablicy samochodów w formacie JSON
fs.writeFileSync('cars.txt', JSON.stringify(cars))
//odczyt pliku z tablicą samochodów w formacie JSON
const buffer = fs.readFileSync('cars.txt');
console.log(buffer.toString());
const newCars = JSON.parse(buffer.toString());
console.log(newCars)





