
// Chiedere le informazioni all'utente
function getData(){
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let color = prompt("Inserisci il tuo colore preferito");
let choiceNumber1 = prompt("Scegli un numero");
let choiceNumber2 = prompt("Scegli un altro numero");


// Converto le variabili dei numeri sottoforma di stringa in un NUMERO
choiceNumber1 = parseInt(choiceNumber1);
choiceNumber2 = parseInt(choiceNumber2);

// Elaborazione delle statistiche
let firstNumberDividedForTheSecond = choiceNumber1 / choiceNumber2;

// Generatore di numeri
let min = 100;
let max = 9999;

let randomNumber = Math.floor((Math.random() * (max - min)) + min);


// Compliazione della console
let passwordInfo = `
------------------

> Informazioni:
Nome e Cognome: ${name} ${surname}
Colore preferito: ${color}
Due numeri divisi: ${firstNumberDividedForTheSecond}
Numero randomico: ${randomNumber}

----------------
Password 1: ${name}${surname}${color}${21}
Password 2: ${name}${surname}${color}${firstNumberDividedForTheSecond}
Password 3: ${name}${surname}${color}${randomNumber}

`;

console.log(passwordInfo);
}

function getPassword1(){

    document.getElementById("password_1").innerHTML = name + surname + color + 21;
    
}

function getPassword2(){
    document.getElementById("password_1").innerHTML = name + surname + color + firstNumberDividedForTheSecond;
    
}

function getPassword3(){
    document.getElementById("password_1").innerHTML = name + surname + color + randomNumber;

}

// Qui posso poi compilare l'eventuale pagina HTML prodisposta.
// document.getElementById("user_age").innerHTML = age;


