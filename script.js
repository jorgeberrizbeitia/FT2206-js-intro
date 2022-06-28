console.log("HOLA JavaScript");

// esto es un comentario

/*

esto es un comentario de multiples lineas

*/

// VARIABLES

// DECLARACION DE VARIABLE
let hobby;

console.log(hobby);

// INICIALIZACION DE VARIABLE
hobby = "Videojuegos";

console.log(hobby);

// DECLARACION E INICIALIZACION DE LA VARIABLE
let otherHobby = "Juegos de Mesa";

console.log(otherHobby);

// cosas que no podemos o deberiamos hacer al crear variables

// let 3fruit = "algo"
// let export = "algo"
let myfavouriteplaceonearth = "Japan";
// siempre usar camelcase
let myFavouritePlaceOnEarth = "Japan";

// CONST Y LET

let age = 30;
console.log("antes de cambiar valor", age);

age = 31;
console.log("luego de cambiar el valor", age);

const birthday = "01/10";
console.log("antes de cambiar valor", birthday);

// birthday = "10/10";

// var

// var es una keyword de ES5-
// let y const son formas más avanzadas de escribir variables
// var permite hoisting
// var es OBSOLETO



// TYPOS DE DATA EN JS

let variable1 = "hola";
let variable2 = 20;

// typeof

console.log( typeof variable1 )
console.log( typeof variable2 )

let variable3 = true;
console.log(typeof variable3)

let variable4 = undefined;
console.log(typeof variable4)

let variable5 = {name: "Jorge"}
console.log(typeof variable5)

let variable6 = null;
console.log(typeof variable6) // JS bug muestra Object

let variable7 = ["Jorge"]
console.log(typeof variable7)

let variable8 = NaN;
console.log(typeof variable8)


