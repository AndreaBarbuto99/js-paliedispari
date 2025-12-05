// /* Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma */

let userWord = prompt("Inserisci una parola");

console.log(wordIsPali(userWord));

// /*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. */


const userPD = prompt("La somma dei numeri deve essere pari o dispari?");
let userNum = 0;
let sumNum;

while (userNum < 1 || userNum > 5)
{
    userNum = parseInt(prompt("Inserisci il numero da te scelto in un range da 1 a 5"));
}

console.log(userNum);

const botNum = Math.floor(Math.random() * 5) + 1;
console.log(botNum);

sumNum = userNum + botNum;
console.log(sumNum);

console.log(isOddEven(sumNum, userPD));


















// FUNZIONI

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

function isOddEven (sum, oddEven) {
    if (sum % 2 === 0 && oddEven === "pari"){
        return "Hai vinto";
    }
    else if(sum % 2 !== 0 && oddEven === "dispari"){
        return "Hai vinto";
    }
    else {
        return "Hai perso";
    }
}