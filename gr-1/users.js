/*
1. Stwórz plik tekstowy users.txt z  użytkownikami zapisanymi w postaci 
JSON np.:
[
    {"name": "karol", "password" : "abc", ..}, 
    {}
]
2. W pliku users.js napisz program,który:
 - wczytuje dane z pliku users.txt
 - zamienia dane na tablicę obiektów users
 - wyświetla tablicę users
*/

const fs = require('fs')
const users = JSON.parse(fs.readFileSync('user.txt').toString())
console.log("KONIEC WCZYTYWANIA DANYCH")
console.log(users)
