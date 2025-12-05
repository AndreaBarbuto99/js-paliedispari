/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

let userWord = prompt("Inserisci una parola");

console.log(wordIsPali(userWord));


function wordIsPali (string)
{
    string = string.toLowerCase();
    let toArray = string.split("");
    console.log(toArray);
    toArray = toArray.reverse().join("");
    console.log(toArray);
    if (toArray === string)
    {
        return "La parola scelta è palindroma";
    }
    
    else 
    {
        return "La parola scelta non è palindroma";
    }
    console.log(toArray);
}