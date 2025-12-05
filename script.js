// // // /* Chiedere all’utente di inserire una parola
// // // Creare una funzione per capire se la parola inserita è palindroma */
// // CHIAMATA A FUNZIONE PER VERIFICARE SE UNA STRINGA E' PALINDROMA
let userWord = prompt("Inserisci una parola");
console.log(stringIsPali(userWord));

// // // /*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// // // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// // // Sommiamo i due numeri
// // // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// // // Dichiariamo chi ha vinto. */


const userPD = prompt("La somma dei numeri deve essere pari o dispari?");
console.log(userPD);
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

// CHIAMATA A FUNZIONE PER VERIFICARE SE UNA PAROLA E' PALINDROMA (METODO 2)
// let userWordTwo = prompt("Inserisci una parola");
// console.log(stringIsPaliMe(userWordTwo));














// FUNZIONI

// FUNZIONE PER VERIFICARE SE UNA STRINGA E' PALINDROMA (METODO CON FUNZIONI ESTERNE)
function stringIsPali (string)
{
    string = string.toLowerCase();
    let toArray = string.split("");
    console.log(toArray);
    toArray = toArray.reverse().join("");
    console.log(toArray);
    let result;
    if (toArray === string)
    {
        return result = "La parola scelta è palindroma";
    }
    
    else 
    {
        return result = "La parola scelta non è palindroma";
    }
    console.log(toArray);
}

// FUNZIONE PER VERIFICARE SE UNA STRINGA E' PALINDROMA (METODO CON ORDINAMENTO MANUALE)

function stringIsPaliMe (string)
{
    string = string.toLowerCase();
    let reversedString = "";
    let result;
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString = reversedString + string[i];
    }
    if (reversedString === string)
    {
        return result = "La parola scelta è palindroma";
    }
    
    else 
    {
        return result = "La parola scelta non è palindroma";
    }
    console.log(reversedString);
}

// FUNZIONE PER VERIFICARE SE LA SOMMA DI DUE NUMERI E' PARI O DISPARI. RITORNA RISULTATO POSITIVO SE USER HA FATTO LA SCELTA GIUSTA

function isOddEven (sum, oddEven) {
    let result;
    if (sum % 2 === 0 && oddEven === "pari"){
        return result = "Hai vinto";
    }
    else if(sum % 2 !== 0 && oddEven === "dispari"){
        return result = "Hai vinto";
    }
    else {
        return result = "Hai perso";
    }
}
