
// Chiedere le informazioni all'utente
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


// Compliazione della console
let passwordInfo = `
------------------

> Informazioni:
Nome e Cognome: ${name} ${surname}
Colore preferito: ${color}
Due numeri divisi: ${firstNumberDividedForTheSecond}

----------------

Info in riga: ${name}${surname}${color}${firstNumberDividedForTheSecond}
`;

console.log(passwordInfo);

// Qui posso poi compilare l'eventuale pagina HTML prodisposta.
// document.getElementById("user_age").innerHTML = age;

