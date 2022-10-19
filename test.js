// // variable 

//console.log('Hello dear Johnson Junior, Welcome into the backend development wizarding world! ')
//const a= 10
//const b =3

//console.log(a%b) 



// const prix = 100 
// const tva = 0.21
// //console.log(prix+ prix*tva)
// console.log("prix htva:"+" "+prix+" "+"montant de la tva:"+" "+prix*tva)

// // conditions 

// const heure = prompt("quelle heure est il?");
// const h = prompt("heure : ");
// const min = prompt("minutes : ");
// const sec = prompt("secondes : ");
// const secfinale = (h3600) + (min60) + sec;
// console.log("il y a " + secfinale + "secondes depuis 00h")

// Dans un cinéma le plein tarif est de 10 €, le tarif réduit est de 8 €. 
// Écrire un algorithme qui étant donné un booléen indiquant si la personne peut bénéficier
// d'un tarif réduit imprime le prix à payer .


// let prix_plein = 10;
// let prix_reduit = 8;
// const prompt = require('prompt-sync')({ sigint : true });
// let age = prompt(`quel age as-tu?`);
//  if (age < 12){
//     console.log(`price to pay is ${prix_reduit}`)
//  }
//  else {
//     console.log(`price to pay is ${prix_plein}`)
//  }


// const prompt = require('prompt-sync')({ sigint : true });
// let a = prompt ('Ecris un chiffre');
// let b = prompt ('Ecris un chiffre');
// let c = prompt ('Ecris un chiffre');
// if (a > b){
//         console.log(`price to pay is ${a}`)
//      }
//      else if (b < c) {
//         console.log(`price to pay is ${c}`)
//      }
//      else (a < c) {
//         console.log(`price to pay is ${c}`)
//      }


// const prompt = require('prompt-sync')({ sigint : true });
// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));

// const largest = Math.max(num1, num2, num3);
// console.log("The largest number is " + largest)

// Un imprimeur facture 0,12 € les dix premiers exemplaires, 
// 0,11 € les 20 suivants et 0,10 € à partir de là. 
// Écrivez un algorithme qui donne un nombre d'exemplaires et
// calcule le prix .

// let prix_plein = 0.12;
// let prix_reduit = 0.11;
// let prix_reduise = 0.10;
// const prompt = require('prompt-sync')({ sigint : true });
// let exemplaires = prompt(`Combien d'exemplaires?`);
//  if (exemplaires <= 10){
//     console.log(`price to pay is ${prix_plein}`)
//  }
//  else if (exemplaires >20) {
//     console.log(`price to pay is ${prix_reduise}`)
//  }
//  else {
//     console.log(`price to pay is ${prix_reduit}`)
//  }

// // Boucles
for (let i = 0 ; i > 10; i++){
    console.log()
}


const prompt = require("prompt-sync")();
// 
// var n = prompt("a partir de 1, entre un nombre : ");
// var nombre = 1; 
// while (nombre <= n) 
// {
// 	console.log("le chiffre" + nombre);
// 	nombre++;
// }



// //e
// var n = prompt("entre un chiffre : "); // n = 5
// var nombre = 1; // nombre = 1
// while (n >= nombre) 
// {
// 	console.log("le chiffre est : " + n);
// 	n--;
// }



// var n = prompt("entrer un nombre : ");
// var negatif = n * -1;
// while (negatif <= 0)
// {
// 	console.log("le chiffre est : " + negatif);
// 	negatif ++;
// 	while (negatif <= n)
// {
// 	console.log("le chiffre est : " + negatif);
// 	negatif++;
// }
// }




// var n = prompt("entrer un nombre : ");
// var nombre = 1;
// while (nombre <= n) {
// 	if (nombre%2 != 0)
// 		{
// 			console.log(nombre);
// 		}
// 	nombre++
// }




// x = Math.random()*100;
// var nombre = 1;
// while (nombre <= x) 
// {
// 	console.log(nombre);
// 	nombre++;
// }



// // Write an algorithm which throws a dice a given number of time and count the number of time a certain number is received.

// nbrlancer = Math.random()*100;
// var nbr = 0;

// let min = 1;
// let max = 6;
// var resultat = Math.floor(Math.random()* (max - min + 1 ) + min);


// var somme = 0;


// while (nbr<nbrlancer)
// {
// 	var somme2 = somme + resultat

// 	nbr++
// }




