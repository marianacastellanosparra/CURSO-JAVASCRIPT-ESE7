// A. tipos de datos  typeof

// string, number, boolean, null, undefined, symbol, bigint

// no primitivos: object, array, function

"use strict"; // modo estricto que ayuda a evitar errores comunes, como variables no declaradas

const s = "hola mundo"; // string
const n = 42; // number
const b = true; 
let u; // undefined valor no asignado
const nu = null; // null valor intencionalmente vacio
const big = 9007199254740991; // bigint para números enteros grandes
const sym = Symbol("id"); // symbol para identificadores únicos

console.log(typeof s); // string
console.log(typeof n); // number
console.log(typeof b); // boolean
console.log(typeof u); // undefined
console.log(typeof nu); // object (null es un caso especial de objeto)
console.log(typeof big); // bigint
console.log(typeof sym); // symbol

//correro cofigo usando  extension code runner en vscode ctrl + alt + n  
// usa null cuando quieres decir no "hay valor" y undefined cuando quieres decir "valor no asignado"

//B. let vs const (y porque evitar var)

// const 
// No permite reassingacion de valor, es decir, no puedes cambiar el valor de una variable declarada con const después de haberla asignado.
// Sin embargo, si el valor es un objeto o un array, puedes modificar sus propiedades o elementos.

const x = 10;
// x = 20; // Esto causará un error porque no se puede reasignar una variable const

const obj = { name: "Alice" };
obj.name = "Bob"; // Esto es permitido, ya que estamos modificando una propiedad del objeto, no reasignando la variable obj

// let
// Permite reasignación de valor, es decir, puedes cambiar el valor de una variable declarada con let después de haberla asignado.

let y = 10;
y = 20; // Esto es permitido porque let permite reasignación

// porque evitar var
// var tiene un alcance de función, lo que significa que si declaras una variable con var dentro de una función, esa variable es accesible en toda la función, incluso antes de su declaración debido al hoisting.
//  Esto puede llevar a errores difíciles de depurar.

function demo() {
    if (true) {
        var z = 30; // z es accesible en toda la función demo, incluso antes de esta línea debido al hoisting
    }   
    console.log(z); // Esto funcionará y mostrará 30, lo que puede ser confuso
    
}//llamamos demo
demo();

// usa const por defecto
// usa let si necesitas reasignar un valor

// C. Converion de tipos(corercion) vs conversion explicita

// coercion de tipos (conversion implicita)
// JavaScript convierte automáticamente los tipos de datos cuando es necesario, lo que puede llevar a resultados inesperados.


console.log("m" + 3);
console.log("5" - 3); // 2 (coercion a number)
console.log(true + 1); // boolean (true)

// conversion explicita
// Puedes convertir tipos de datos manualmente usando funciones como Number(), String(), Boolean(), etc.

const input = "12.5";
const num = Number(input); // Conversión explícita de string un numero

const number = 42;
const str = String(number); // Conversión explícita de numero a string

console.log(num); // 12.5
console.log(str); // "42"


// operadores claves

// 1) === VS ==
// === compara tanto el valor como el tipo de datos, mientras que 
// == compara solo el valor después de realizar coercion de tipos si es necesario.

console.log(5 === "5"); // false (diferente tipo)
console.log(5 == "5"); // true (coercion a number)

// siempre usar  === para evitar errores de comparación debido a coercion de tipos inesperada.
// USO !== para comparar desigualdad estricta, que también compara tanto el valor como el tipo de datos.

// 2) && VS || ?? 
// && (AND lógico) devuelve el primer valor falsy o el último valor si todos son truthy

// V  V= V    V F = F   F F = F 
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

// ?? (Nullish coalescing) devuelve el primer valor que no sea null o undefined
const a = null;

const c = "default";
console.log(a ?? c); // "default" (porque a es null)


// ?? es útil para proporcionar un valor predeterminado solo cuando el valor es null o undefined,
//  a diferencia de || que considera falsy (como 0, "", false) como valores que también activan el valor predeterminado.

console.log(0 || "default"); // "default" (porque 0 es falsy)

// D. Template strings 

const ingreso = 5000000;
const gasto = 450000;
const balance1 = ingreso - gasto; 

const mensaje = `El balance es: ${balance1}`; // Usamos ${} para insertar la expresión balance dentro de la cadena
console.log(mensaje); // Imprime: El balance es: 4550000    

console.log(`El ingreso es: ${ingreso}, el gasto es: ${gasto}, y el balance es: ${balance1}`); // Imprime: El ingreso es: 5000000, el gasto es: 450000, y el balance es: 4550000


// F. CONTROL DE FLUJO: if, else, switch, for, while, do while
// EJEMPLO IF ELSE

const edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

console.log(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"); // operador ternario

// for loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const gastos1 = [100, 200, 300];
let totalGastos1 = 0;

for (let i = 0; i < gastos1.length; i++) {
    totalGastos1 += gastos[i]; // totalGastos1 = totalGastos1 + gastos1[i];
}

console.log(`Total de gastos: ${totalGastos}`);



// Ejemplos de código para cada concepto

// 1. CONST - Número constante
const precioProducto = 50000;
console.log(`Precio: ${precioProducto}`);

// 2. CONST - String constante
const nombreTienda = "Mi Tienda";
console.log(nombreTienda);

// 3. LET - Variable que cambia
let dinero = 100000;
dinero = dinero - 20000; // Cambió el valor
console.log(`Dinero restante: ${dinero}`);

// 4. DATOS - Array simple
const numeros = [10, 20, 30, 40];
console.log(numeros);

// 5. DATOS - Objeto simple
const persona = {
    nombre: "Carlos",
    edad: 25
};
console.log(persona.nombre);

// 6. IF - Comparación simple
const calificacion = 8;
if (calificacion >= 7) {
    console.log("Aprobaste");
} else {
    console.log("Reprobaste");
}

// 7. SWITCH - Elegir opción
const dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
}

// 8. FOR - Contar del 1 al 5
for (let i = 1; i <= 5; i++) {
    console.log(`Número: ${i}`);
}

// 9. FOR - Sumar array
const ventas = [5000, 8000, 3000, 12000, 6000];
let totalVentas = 0;
for (let i = 0; i < ventas.length; i++) {
    totalVentas = totalVentas + ventas[i];
}
console.log(`Total de ventas: ${totalVentas}`);

// 10. TERNARIO - Respuesta corta
const horaActual = 14;
const saludo = horaActual < 12 ? "Buenos días" : "Buenas tardes";
console.log(saludo);

