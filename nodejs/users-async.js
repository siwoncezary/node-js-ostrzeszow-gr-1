const fs = require('fs')
let arr;
//Odczyt asynchroniczny danych z pliku
fs.readFile('user.txt', function(error, data){
    console.log("DANE WCZYTANE")
    if (error){
        console.log(error)
        return
    }
    arr = JSON.parse(data.toString())
    console.log(arr);
})
