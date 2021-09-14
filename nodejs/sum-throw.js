function sum(arr){
    let suma = 0;
    if (!arr){
        //zgłaszanie wyjątku
        throw "Brak argumentu funkcji!!!"
    }
    for(let i of arr){
        suma += i
    }
    return suma
}
//przechwytywanie wyjątku
try{
    let wynik = sum()
    console.log('wartość sumy: ' + wynik)
} catch(e){
    console.log(e)
} finally{
    console.log("TEN KOMUNIKAT JEST ZAWSZE!!!")
}