/*  EJERCICIO JS BASIC ALGORITHMS - Iteración #1: Variables:

1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
1.2 Crea una variable llamada x, asigna el valor 50 a ella.
1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'. */

const myFavoriteHero = "Hulk";
const x = 50;
const h = 5;
const y = 10;
const z = (h + y);
console.log(myFavoriteHero + " " + z);




/* EJERCICIO JS BASIC ALGORITHMS - Iteración #2: Variables avanzadas:

1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.*/
const character = {name: 'Jack Sparrow', age: 10};
character = {name: "Jack Sparrow", age: 25};  // reasignación de valor age
console.log(character);

/* 1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon';
	lastName = 'Snow'; 
	age = 24; */
/*Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'*/
const firstName = "Jon";
const lastName = "Snow";
let age = 24; 
let stringJon = ("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.");
console.log(stringJon);


/*1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.*/
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);

/* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.*/
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice = car1.basePrice + globalBasePrice};
car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice = car2.basePrice + globalBasePrice};




globalBasePrice = 25000;
car1.finalPrice = (globalBasePrice + car1.basePrice);
car2.finalPrice = (globalBasePrice + car1.basePrice);

console.log(car1);
console.log(car2);*/





//EJERCICIO 3  -   Iteración #3: Operadores

/*1.1 Multiplica 10 por 5 y muestra el resultado mediante console.log.

1.2 Divide 10 por 2 y muestra el resultado en un console.log.

1.3 Muestra mediante un console.log el resto de dividir 15 por 9.

1.4 Usa el correcto operador de asignación que resultará en x = 15,
teniendo dos variables y = 10 y z = 5.

1.5 Usa el correcto operador de asignación que resultará en x = 50,
teniendo dos variables y = 10 y z = 5.*/

const a = 10;
const b = 5;
let total = a * b;
console.log(total);

const c = 2;
let total_ = a / c;
console.log(total_);

const d = 15;
const e = 9;
let totalX = d / e;
console.log(totalX);

const y = 10;
const z = 5;
let totalXx = y * z;
console.log(totalXx);



// EJERCICIO 4       -      Iteración #4: Arrays

/*1.1 Consigue el valor "HULK" del array de cars y muestralo por consola
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

/* 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/
avengers.splice(0, 1, "IRONMAN");
console.log(avengers);

/*1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

console.log(avengers.length);

/*1.4 Añade 2 elementos al array: "Morty" y "Summer".
Muestra en consola el último personaje del array
*/

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters [4]);

/*1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters [0]); 
console.log(rickAndMortyCharacters [4]); /*un console para cada elemento*/ 


/*1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1, 1);
console.log();




// EJERCICIO 5      -      Iteración #5: Condicionales

 const number1 = 10;
 const number2 = 20;
 const number3 = 2;

// // ejemplo
// if(number1 === 10){
// console.log('number1 es estrictamente igual a 10')
// }


 if (number2 / number1 == 2) {
 console.log("number2 dividido entre number1 es igual a 2");
 }


 if (number1 !== number2) {
 console.log("number1 es estrictamente distinto a number2");
 }


 if (number3 != number1) {
 console.log("number3 es distinto number1");
 }


 if (number3 * 5 == number1) {
 console.log("number3 por 5 es igual a number1");
 } 


 if (number3 * 5 == number1 && number1 * 2 == number2) {
 console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
 }


 if (number2 / 2 == number1 || number1 / 5 == number3) {
 console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
 }




// EJERCICIO 6         -      Iteración #6: Bucles  


// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let num = 0; num < 10 ; num++) {   
    console.log(num);  
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.

for (let num = 0; num < 10 ; num++) {   
    if (num / 2 === 0) {
    console.log(num); } 
}
// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle empieza en 0 y termina en 10. 
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
// y cambia el mensaje en la última vuelta a 'Dormido!'.

for (let num = 0; num <= 10 ; num++) {   
    if (num < 9) {
        console.log("Intentando dormir"); }

  else if (num = 10) {
    console.log("Dormido");
  }
}
