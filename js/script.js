var name;
var surname;
var color;
var pw;

name = prompt("Inserisci il tuo nome");
surname = prompt("Inserisci il tuo cognome");
color = prompt("Inserisci il tuo colore preferito");

pw = name + surname + color + "27";

document.getElementById('insecure-pw').innerHTML = pw;
