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




// calculadiora de presupuestos mensual
// * registra ingresos y gastos
// * calcula totales, balance
// * Determina SUPERAVIT que es el saldo de la cuenta individual de vivienda del trabajador,
//  que se utiliza para financiar la compra de una vivienda, construcción o mejora de la misma,
//  o para pagar una hipoteca relacionada con la vivienda.
//  EQUILIBRADO  y DEFICIT

// REQUISITOS FUNCIONALES
// * Crear listas  Ingresos[] y Gastos[] con objetos {concepto, monto}
// * Validar: monto debe ser numero finito > = 0
// * Calcular: totalIngresos, totalGastos, balance
// * Clasificar eStdo segun balance 
// * Mostrar reporte en consola (TABLA + RESUMEN)

"use strict"; // "use strict" es una directiva que se utiliza en JavaScript para activar el modo estricto, 
// lo que ayuda a prevenir errores comunes y mejora la seguridad del código.
//  Al usar "use strict", se aplican reglas más estrictas en la interpretación del código, 
// lo que puede ayudar a detectar errores de manera más temprana y evitar comportamientos inesperados.

/**
 * CONVIERTE A NUMERO Y VALIDA QUE SEA UN NUMERO FINITO MAYOR O IGUAL A CERO
 * lANZA UN ERROR SI LA VALIDACION FALLA
 */

function validarMonto(monto) {
    const numero = Number(monto); // Convierte el valor a número
    if (!Number.isFinite(numero) || numero < 0) { // SI EL NUMERO NO ES FINITO O ES MENOR QUE CERO, LANZA UN ERROR
        throw new Error("Monto inválido: debe ser un número finito mayor o igual a cero");
    }
    return numero;
} 



// MODELAR DATOS DE INGRESOS Y GASTOS
const ingresos = [
    { concepto: "Salario", monto: 5000000 },
    { concepto: "Freelance", monto: 1500000 },
];

/**
 * lo anteriro crea una lista de ingresos 
 */

const gastos = [
    { concepto: "Alquiler", monto: 1200000 },
    { concepto: "Comida", monto: 800000 },
    { concepto: "Transporte", monto: 300000 },
];


// CALCULAR TOTALES

function calcularTotal(items) {
    let total = 0;
    for (const item of items) { // RECORRE CADA ITEM EN LA LISTA DE INGRESOS O GASTOS
        total += validarMonto(item.monto); // VALIDA CADA MONTO ANTES DE SUMARLO AL TOTAL
    }
    return total;
}

const totalIngresos = calcularTotal(ingresos);
const totalGastos = calcularTotal(gastos);
const balance = totalIngresos - totalGastos;

// CLASIFICAR ESTADO FINANCIERO

function getEstadoFinanciero(balance) {
    if (balance > 0) {
        return "SUPERAVIT";
    } else if (balance === 0) {
        return "EQUILIBRADO";
    } else {
        return "DEFICIT";
    }
}

function recomendacion(estado) {
    switch (estado) {
        case "SUPERAVIT":
            return "¡Buen trabajo! Considera ahorrar o invertir el excedente.";
        case "EQUILIBRADO":
            return "Estás en equilibrio, pero revisa tus gastos para mejorar tu situación.";
        case "DEFICIT":
            return "Revisa tus gastos y busca formas de reducirlos o aumentar tus ingresos.";
        default:
            return "";
    }
}

// MOSTRAR REPORTE EN CONSOLA

console.table(ingresos);
console.table(gastos);

console.group ("Resumen Financiero");
console.log(`Total Ingresos: ${totalIngresos}`);
console.log(`Total Gastos: ${totalGastos}`);
console.log(`Balance: ${balance}`);
console.log(`Estado Financiero: ${getEstadoFinanciero(balance)}`);
console.log(`Recomendación: ${recomendacion(getEstadoFinanciero(balance))}`);
console.groupEnd();