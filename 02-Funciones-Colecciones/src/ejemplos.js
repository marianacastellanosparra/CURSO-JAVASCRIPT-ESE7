// formas de declarar funciones en javascript

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3)); // Imprime 8

const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(5, 3)); // Imprime 15

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max); // clamp a un rango entre min y max
};
console.log(clamp(10, 0, 5)); // Imprime 5 (clamp a 5)

// Parametros por defecto, rest y guard clauses

function greet(name = "Invitado") {
  if (!name.trim())
    // trim elimina espacios en blanco al inicio y al final de la cadena
    return "Hola, Invitado!";
  return `Hola, ${name}!`;
}

console.log(greet()); // Imprime "Hola, Invitado!"
console.log(greet("Alice"));

// Arrays y metodos claves

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((num) => num * 2); // map crea un nuevo array con los resultados de la función aplicada a cada elemento
console.log(cuadrados); // Imprime [1, 4, 9, 16, 25]

const expenses = [
  { amount: 50, category: "food" },
  { amount: 20, category: "transport" },
  { amount: 30, category: "food" },
];
// filter 

const foodExpenses = expenses.filter((expense) => expense.category === "food"); 
// filter crea un nuevo array con los elementos que cumplen la condición
console.log(foodExpenses); // Imprime [{ amount: 50, category: "food" }, { amount: 30, category: "food" }]

const totalFoodExpense = foodExpenses.reduce((total, expense) => total + expense.amount, 0);
// reduce acumula un valor a través de los elementos del array, en este caso sumando los montos de los gastos de comida
console.log(totalFoodExpense); // Imprime 80




// =======================
// 5 EJEMPLOS DE MAP()
// =======================

// 1. Obtener el triple de los números
const numeros1 = [1, 2, 3, 4];
const triples = numeros1.map((num) => num * 3);
console.log(triples); // [3, 6, 9, 12]

// 2. Convertir nombres a mayúsculas
const nombres = ["ana", "juan", "maria"];
const nombresMayus = nombres.map((nombre) => nombre.toUpperCase()); // toUpperCase convierte una cadena a mayúsculas
console.log(nombresMayus); // ["ANA", "JUAN", "MARIA"]

// 3. Obtener la longitud de cada palabra
const palabras1 = ["sol", "luna", "estrella"]; 
const longitudes = palabras1.map((palabra) => palabra.length);  // length devuelve la cantidad de caracteres en una cadena
console.log(longitudes); // [3, 4, 8]

// 4. Extraer solo los precios
const productos1 = [  
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Mouse", precio: 50 },
];
const precios1 = productos1.map((producto) => producto.precio); 
console.log(precios1); // [1000, 50]

// 5. Convertir números a string
const numeros2 = [10, 20, 30];
const numerosTexto = numeros2.map((num) => num.toString());  // toString convierte un número a una cadena de texto
console.log(numerosTexto); // ["10", "20", "30"]


// =======================
// 5 EJEMPLOS DE FILTER()
// =======================

// 1. Filtrar números mayores a 10
const numeros3 = [5, 12, 8, 20, 3];
const mayores = numeros3.filter((num) => num > 10);  // números mayores a 10
console.log(mayores); // [12, 20]

// 2. Filtrar números pares
const numeros4 = [1, 2, 3, 4, 5, 6];
const pares = numeros4.filter((num) => num % 2 === 0);  // números pares (num % 2 === 0 significa que el número es divisible por 2 sin residuo)
console.log(pares); // [2, 4, 6]

// 3. Filtrar palabras largas
const palabras2 = ["sol", "computadora", "mesa", "teclado"];
const largas = palabras2.filter((palabra) => palabra.length > 5);  // palabras con más de 5 caracteres
console.log(largas); // ["computadora", "teclado"]

// 4. Filtrar productos caros
const productos2 = [
  { nombre: "Celular", precio: 800 },
  { nombre: "Cargador", precio: 20 },
];
const caros = productos2.filter((producto) => producto.precio > 100);  // productos con precio mayor a 100
console.log(caros); // [{ nombre: "Celular", precio: 800 }]

// 5. Filtrar usuarios activos
const usuarios = [
  { nombre: "Ana", activo: true },
  { nombre: "Luis", activo: false },
];
const activos = usuarios.filter((usuario) => usuario.activo);  // usuarios donde la propiedad "activo" es true
console.log(activos); // [{ nombre: "Ana", activo: true }]


// =======================
// 5 EJEMPLOS DE REDUCE()
// =======================

// 1. Sumar todos los números
const numeros5 = [1, 2, 3, 4];
const suma = numeros5.reduce((total, num) => total + num, 0);  // sumando los números, y el segundo argumento (0) es el valor inicial del acumulador
console.log(suma); // 10

// 2. Multiplicar todos los números
const numeros6 = [2, 3, 4];
const producto = numeros6.reduce((total, num) => total * num, 1);  // multiplicando los números, y el segundo argumento (1) es el valor inicial del acumulador (multiplicación neutra)
console.log(producto); // 24

// 3. Contar cantidad de elementos
const frutas = ["manzana", "pera", "uva"];
const cantidad = frutas.reduce((total) => total + 1, 0);  // contando la cantidad de elementos, incrementando el total en 1 por cada elemento, y el segundo argumento (0) es el valor inicial del contador
console.log(cantidad); // 3

// 4. Sumar precios de productos
const productos3 = [
  { nombre: "Libro", precio: 30 },
  { nombre: "Cuaderno", precio: 20 },
];
const total = productos3.reduce(
  (acumulador, producto) => acumulador + producto.precio, 0); // sumando los precios de los productos, y el segundo argumento (0) es el valor inicial del acumulador
console.log(total); // 50

// 5. Contar cuántas veces aparece cada número
const numeros7 = [1, 2, 2, 3, 3, 3];
const conteo = numeros7.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {}); // contando la frecuencia de cada número, utilizando un objeto como acumulador para almacenar el conteo, y el segundo argumento ({}) es el valor inicial del acumulador (un objeto vacío)
console.log(conteo); // { 1: 1, 2: 2, 3: 3 }