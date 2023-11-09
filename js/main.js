
//variabili

let name;
let surname;
let color;
let choiceNumber1;
let choiceNumber2;

let firstNumberDividedForTheSecond;
let randomNumber;


// Chiedere le informazioni all'utente
function getData(){
 name = prompt("Inserisci il tuo nome");
 surname = prompt("Inserisci il tuo cognome");
 color = prompt("Inserisci il tuo colore preferito");
 choiceNumber1 = prompt("Scegli un numero");
 choiceNumber2 = prompt("Scegli un altro numero");


// Converto le variabili dei numeri sottoforma di stringa in un NUMERO
choiceNumber1 = parseInt(choiceNumber1);
choiceNumber2 = parseInt(choiceNumber2);


// Elaborazione delle statistiche
 firstNumberDividedForTheSecond = choiceNumber1 / choiceNumber2;


// Generatore di numeri
 min = 100;
 max = 9999;

 randomNumber = Math.floor((Math.random() * (max - min)) + min);


// Compliazione della console
 passwordInfo = `
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

// funzioni per generare password

function getPassword1(){

    document.getElementById("password").innerHTML = name + surname + color + 21;
    
}

function getPassword2(){
    document.getElementById("password").innerHTML = name + surname + color + firstNumberDividedForTheSecond;
    
}

function getPassword3(){
    document.getElementById("password").innerHTML = name + surname + color + randomNumber;

}

/* tasto per copiare password

function myFunction() {
    // Get the text field
    let copyText = document.getElementById("password");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

  */

