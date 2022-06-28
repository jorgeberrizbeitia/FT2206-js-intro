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

console.log(typeof variable1);
console.log(typeof variable2);

let variable3 = true;
console.log(typeof variable3);

let variable4 = undefined;
console.log(typeof variable4);

let variable5 = {
  name: "Jorge",
};
console.log(typeof variable5);

let variable6 = null;
console.log(typeof variable6); // JS bug muestra Object

let variable7 = ["Jorge"];
console.log(typeof variable7);

let variable8 = NaN;
console.log(typeof variable8);

// STRINGS

let fruit1 = "fresa";
let fruit2 = "uva";
let fruit3 = "banana";

let recipe = "La bebida incluye " + fruit1;
// concatenación de strings

console.log(recipe);

let newRecipe = "La bebida incluye " + fruit1 + " " + fruit2 + fruit3;
console.log(newRecipe);

let betterRecipe = `La bebida incluye ${fruit1}, ${fruit2} y ${fruit3}`;
console.log(betterRecipe);
// `` template literals
// ${} interpolacion de variables

// INDICES EN STRINGS

let simpleWord = "hola";
//                ||||
//                0123

console.log(simpleWord);

// notacion de corchetes (bracket notatio)
console.log(simpleWord[0]);
console.log(simpleWord[3]);

// .length

console.log(simpleWord.length); // 4

let longWord = "ahksgdyqgjsbdqjsbhdahbjwvduygaejhcbjavyavedjasdfsdfyvejdavy";

// console.log( longWord.length ) // 53
// console.log( longWord[53 - 1] )

console.log(longWord[longWord.length - 1]);

// METODOS DE STRINGS

let longString = "bananaramasamirahmorahwakaka";

// .slice
console.log(longString.slice(0, 10));

console.log(longString.slice(longString.length - 6, longString.length));
// console.log( longString.slice(-6) ) // mismo resultado que antes. DOCUMENTACION!

let firstLetter = longString[0].toUpperCase();
let restOfWord = longString.slice(1);

console.log(firstLetter);
console.log(restOfWord);

let upperCasedWord = firstLetter + restOfWord;
console.log(upperCasedWord);

// ejemplo actividad

// let name = "jorge"

// name = name[0].toUpperCase() + name.slice(1)

// console.log(name)

// NUMEROS

let posNum = 4;
let negNum = -20;
let floatNu = 4.2746;

console.log(posNum, negNum, floatNu);

let num1 = 7;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(num1 ** num2);

console.log(num1 % num2); // 0
// % operador modulo
// 2 + 2 + 2 = 6

console.log(242937492 % 2);
// 0 es par, 1 es impar

// OPERACIONES DE ASIGNACION +=

let myAge = 30;

myAge = myAge + 1; // 31
console.log(myAge);

myAge += 1;
console.log(myAge); // 32

myAge++;
console.log(myAge); // 33
// todas hacen lo mismo

// ++ o -- o += o -=

// intentemos algo diferente

console.log(5 + 8); // operador de suma

console.log("5" + "8"); // operador de concatenacion

console.log("5" - "8"); // coercion => intenta cambiar los tipos de data

console.log("Javascript" - "script"); // NaN => Not a Number

console.log("5" + 8); // primero coerciona a strings y concatenar => "58"
console.log("5" - 8); // coerciona hacia numeros

console.log(true + 8); // true tiene un valor numerico 1 y false 0

// Objetos globales

// Math

console.log(Math);

let randomNumber = Math.random(); // siempre un numero aleatorio entre 0 y 0.99999999999
console.log(randomNumber);

let randomTen = Math.random() * 10;
console.log(randomTen);

// floor => redondear hacia arriba
// round => redondear hacia el entero más cercano. 0.2 => 0 o 0.7 => 1
// ceil  => redondear hacia abajo

let randomTenRounded = Math.floor(randomTen); // floor es el que se utiliza para numeros aleatorios
console.log(randomTenRounded);

// BOOLEANOS

let boolPos = true;
let boolNeg = false;

// operador (NOT) !

console.log(boolPos);
console.log(!boolPos);
console.log(!boolNeg);

// operadores de comparacion

let food1 = "hamburguesa";
let food2 = "pizza";
let food3 = "Hamburguesa";

console.log(food1 === food2);
console.log(food1 === food3);

console.log(food1 !== food2);

// comparaciones numericas

let num3 = 12;
let num4 = 8;
let num5 = 8;

console.log(num3 > num4);
console.log(num3 < num4);

console.log(num4 >= num5);

// "===" o "=="
// "===" comparacion estricta => compara tambien los tipos de data

console.log("5" === "5");
console.log("5" === 5); // false
console.log("5" == 5); // aplica coercion y luego compara

// "!==" o "!="

// BUENAS PRACTICAS ES: siempre utilizar === o !==

// operaciones comparacion numerica con characteres

console.log("a" < "d"); // true
console.log("a" > "d"); // false

// operadores logicos && y ||

console.log("manzana" === "manzana" && "piña" === "pizza"); // false
// && que solo es verdadero si AMBAS condiciones son verdaderas

console.log("manzana" === "pera" || "banana" === "banana"); // true
// || que si al menos UNA de las operaciones es verdadero, entonces TODO es verdadero.

let game1 = "Zelda";
let game2 = "Mario";
let game3 = "Zelda";

console.log(game1 === game2 || game1 === game3); // true

console.log("ACTIVIDAD");

// Guess the console input for each console.log

console.log(true && false); // false
console.log(11 % 3 === 2); // true . 3 + 3 + 3 + 2 = 11
console.log(false || true); // true
console.log(!true || false); // false
console.log(17 == "17"); // true
console.log(123 === "123"); // false
console.log("Hello" - "llo"); // NaN

let statement = "I love JavaScript!";
let subStatement = statement.slice(7, statement.length);
// Slice copia una seccion del string. No modifica el original
console.log(subStatement);

console.log(statement);

statement[0].toLowerCase(); // "i"
console.log(statement);

// CONDICIONALES

let oranges = 0;

// if (alguna condicion) {
//     algun codigo a ejecutar
// }

if (oranges === 0) {
  console.log("no tienes naranjas");
} else if (oranges > 0 && oranges <= 4) {
  console.log("tienes unas cuantas naranjas", oranges);
} else if (oranges > 4) {
  console.log("tienes MUCHAS naranjas", oranges);
} else {
  // este ultimo else se activa SOLO si nunguna de las anteriores fue true
  console.log("Estos no son naranjas!");
}

let apple = 0;

switch (apple) {
  case 0:
    console.log("no tienes manzanas");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("tienes unas cuantas manzanas");
    break;
  default:
    console.log("tienes muchas Manzanas");
}

// THRUTHY Y FALSY

// if (30 === 30) {
//   console.log("Esto se verá en la consola");
// }

// if (30) {
//   console.log("Esto se verá en la consola");
// }

if (0) {
  console.log("Esto se verá en la consola");
}

if ("") {
  console.log("Esto se verá en la consola");
}

if (0 || "" || false || undefined || NaN || null) {
  console.log("Esto nunca se va a ver")
}


let fullName = "Caro";

if (fullName) {
  console.log(`hola ${fullName}`)
} else {
  console.log("Hola Extraño!")
}


let money = 10;

if (money) {
  console.log(`tienes ${money} Euros`)
} else {
  console.log("No tienes dinero! :(")
}


// FOR LOOP

// for (initializacion; condicion; expresion final) {
//   el codigo a ejecutar X cantidad de veces
// }


// let i = 0 // solo se ejecuta una vez. Variable Control
for (let i = 0; i < 10; i++ ) {
  // if (i < 10) entonces, sigue el bucle

  // .todo mi codigo
  console.log("bucle ejecutandose", i)

  // i = i + 1
}


for (let i = 1; i < 10; i = i + 3) {
  // if (i < 10) entonces, sigue el bucle

  // .todo mi codigo
  console.log("bucle ejecutandose", i)

  // i = i + 3
}

// console.log(i)


for (let i = 15; i > 1; i--) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("ApplePen")
  } else if (i % 5 === 0) {
    console.log("Apple")
  } else if (i % 3 === 0) {
    console.log("Pen")
  } else {
    console.log(i)
  }
}


// UTILIZAR LOOPS CON VARIABLES EXTERNAS

let lyrics = "Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, Around the word, "


let counter = 0;

for (let i = 0; i < lyrics.length; i++) {
  // console.log(i)
  // console.log( lyrics[i] )
  if (lyrics[i] === "o") {
    // console.log("he encontrado la letra o!")
    counter++
  }
}

for (let character of lyrics) {
  if (character === "o") {
    counter++
  }
}

console.log(`encontradas ${counter} letras o`)



// otro ejemplo

let numStr = "423000430040X55003422";

let newString = ""

// 1. crear un nuevo string removiendo los numeros 0
// 2. cuando llegue a la letra X, deje de agregar numeros

for (let i = 0; i < numStr.length; i++) {

  if (numStr[i] === "0") {
    continue; // deten la iteracion actual del loop, y continua con la siguiente
  } else if (numStr[i] === "X") {
    break; // deten el bucle/loop
  }

  newString = newString + numStr[i]
}

console.log(newString)


// for in // for of


let stringToLoop = "Hola";

for (let i in stringToLoop) {
  // este bucle SIEMPRE itera por cada uno de los caracteres del elemento
  console.log(i)
  console.log(stringToLoop[i])
}

for (let character of stringToLoop) {
  // este bucle SIEMPRE itera por cada uno de los caracteres del elemento
  console.log(character)
}



