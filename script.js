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

let variable5 = {
    name: "Jorge"
}
console.log(typeof variable5)

let variable6 = null;
console.log(typeof variable6) // JS bug muestra Object

let variable7 = ["Jorge"]
console.log(typeof variable7)

let variable8 = NaN;
console.log(typeof variable8)



// STRINGS

let fruit1 = "fresa";
let fruit2 = "uva";
let fruit3 = "banana";

let recipe = "La bebida incluye " + fruit1
// concatenación de strings

console.log(recipe)

let newRecipe = "La bebida incluye " + fruit1 + " " + fruit2 + fruit3
console.log(newRecipe)

let betterRecipe = `La bebida incluye ${fruit1}, ${fruit2} y ${fruit3}`
console.log(betterRecipe)
// `` template literals
// ${} interpolacion de variables




// INDICES EN STRINGS

let simpleWord = "hola"
//                ||||
//                0123

console.log(simpleWord)

// notacion de corchetes (bracket notatio)
console.log( simpleWord[0] )
console.log( simpleWord[3] )

// .length

console.log(simpleWord.length) // 4

let longWord = "ahksgdyqgjsbdqjsbhdahbjwvduygaejhcbjavyavedjasdfsdfyvejdavy"

// console.log( longWord.length ) // 53
// console.log( longWord[53 - 1] )

console.log( longWord[ longWord.length - 1 ] )


// METODOS DE STRINGS

let longString = "bananaramasamirahmorahwakaka";

// .slice
console.log( longString.slice(0, 10) )

console.log( longString.slice(longString.length - 6, longString.length) )
// console.log( longString.slice(-6) ) // mismo resultado que antes. DOCUMENTACION!


let firstLetter = longString[0].toUpperCase() 
let restOfWord = longString.slice(1) 

console.log(firstLetter)
console.log(restOfWord)

let upperCasedWord = firstLetter + restOfWord
console.log(upperCasedWord)





