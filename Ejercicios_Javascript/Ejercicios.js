// 1.	Duplicar números con map
// Objetivo: practicar transformación de arreglos. Dado el arreglo:
// const numeros = [2, 4, 6, 8, 10];
// Crea un nuevo arreglo donde cada número esté multiplicado por 2.
// Salida esperada:
// [4, 8, 12, 16, 20]

const numeros = [2, 4, 6, 8, 10]; // Arreglo original
const duplicados = numeros.map(n => n * 2); // Crear un nuevo arreglo donde cada número esté multiplicado por 2
console.log(duplicados);

//Use map para transformar un arreglo de nombres a mayúsculas.
//map() → TRANSFORMAR
//Sirve para crear algo nuevo

// 2.	Convertir nombres a mayúsculas con map Objetivo: transformar cadenas de texto.
// const nombres = ["ana", "luis", "marta", "pedro"];
// Crea un nuevo arreglo con todos los nombres en mayúsculas.

const nombres = ["ana", "luis", "marta", "pedro"]; // Arreglo original
const nombresMayusculas = nombres.map(n => n.toUpperCase()); // Crear un nuevo arreglo con todos los nombres en mayúsculas
console.log(nombresMayusculas);

// 3.	Obtener longitudes de palabras con map Objetivo: usar map con strings.
// const palabras = ["sol", "computador", "mesa", "javascript"]; Genera un arreglo con la longitud de cada palabra.
// Ejemplo esperado:
// [3, 10, 4, 10]

const palabras = ["sol", "computador", "mesa", "javascript"]; // Arreglo original
const longitud = palabras.map(p => p.length); // Crear un nuevo arreglo con la longitud de cada palabra
console.log(longitud);


// 4.	Filtrar números pares con filter
// Objetivo: seleccionar elementos según condición. const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Crea un nuevo arreglo solo con los números pares.

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Arreglo original
const pares = numeros2.filter(n => n % 2 === 0); // Crear un nuevo arreglo solo con los números pares - si el residuo es 0 → es par
console.log(pares);

// 5.	Filtrar palabras largas con filter Objetivo: filtrar textos según su tamaño.
// const palabras = ["casa", "ventana", "sol", "computadora", "luz"]; Obtén solo las palabras que tengan más de 5 letras.

const palabras2 = ["casa", "ventana", "sol", "computadora", "luz"]; // Arreglo original
const palabrasLargas = palabras2.filter(p => p.length > 5); // Crear un nuevo arreglo solo con las palabras que tengan más de 5 letras
console.log(palabrasLargas);

// 6.	Filtrar estudiantes aprobados con filter
// Objetivo: aplicar condiciones sobre objetos. const estudiantes = [
// { nombre: "Ana", nota: 4.5 },
// { nombre: "Luis", nota: 2.8 },
// { nombre: "Marta", nota: 3.7 },
// { nombre: "Carlos", nota: 2.5 }
// ];
// Obtén un nuevo arreglo con los estudiantes cuya nota sea mayor o igual a 3.0.
 const estudiantes = [
{ nombre: "Ana", nota: 4.5 },
{ nombre: "Luis", nota: 2.8 },
{ nombre: "Marta", nota: 3.7 },
{ nombre: "Carlos", nota: 2.5 }
];
const aprovados = estudiantes.filter(e => e.nota >= 3.0); // Crear un nuevo arreglo solo con los estudiantes cuya nota sea mayor o igual a 3.0
console.log(aprovados);

// 7.	Sumar números con reduce Objetivo: acumular valores. const numeros = [5, 10, 15, 20];
// Usa reduce para obtener la suma total del arreglo.
// Resultado esperado:
// 50

const numeros3 = [5, 10, 15, 20]; // Arreglo original
const suma = numeros3.reduce((acc, n) => acc + n, 0); // Usar reduce para obtener la suma total del arreglo - el 0 es el valor inicial del acumulador
console.log(suma);

// 8.	Multiplicar todos los números con reduce Objetivo: practicar acumuladores.
// const numeros = [2, 3, 4];
// Usa reduce para obtener el producto total.
// Resultado esperado:
// 24

const numeros4 = [2, 3, 4]; // Arreglo original
const producto = numeros4.reduce((acc, n) => acc * n, 1); // Usar reduce para obtener el producto total - el 1 es el valor inicial del acumulador
console.log(producto);

// 9.	Contar total de letras con reduce Objetivo: usar reduce con strings.
// const palabras = ["hola", "mundo", "js"];
// Calcula cuántas letras hay en total sumando la longitud de cada palabra.

const palabras3 = ["hola", "mundo", "js"]; // Arreglo original
const totalLetras = palabras3.reduce((acc, p) => acc + p.length, 0); // Usar reduce para calcular cuántas letras hay en total sumando la longitud de cada palabra - el 0 es el valor inicial del acumulador
console.log(totalLetras);

// 10.	Ordenar números ascendentemente con sort
 
// Objetivo: ordenar valores numéricos. const numeros = [45, 12, 78, 3, 19, 1]; Ordénalos de menor a mayor.

const numeros5 = [45, 12, 78, 3, 19, 1]; // Arreglo original
const ordenadosAsc = numeros5.sort((a, b) => a - b); // Usar sort para ordenar los números de menor a mayor - si el resultado es negativo, a va antes que b
console.log(ordenadosAsc);


// 11.	Ordenar números descendentemente con sort Objetivo: cambiar criterio de orden.
// Usa el mismo arreglo anterior y ordénalo de mayor a menor.

const numeros6 = [45, 12, 78, 3, 19, 1]; // Arreglo original
const ordenadosDesc = numeros6.sort((a, b) => b - a); // Usar sort para ordenar los números de mayor a menor - si el resultado es positivo, b va antes que a
console.log(ordenadosDesc);

// 12.	Ordenar nombres alfabéticamente con sort Objetivo: ordenar texto.
// const nombres = ["Pedro", "Ana", "Luis", "Carlos", "Marta"]; Ordénalos alfabéticamente.

const nombres2 = ["Pedro", "Ana", "Luis", "Carlos", "Marta"]; // Arreglo original
const ordenadosAlfabeticamente = nombres2.sort(); // Usar sort para ordenar los nombres alfabéticamente - por defecto, sort ordena strings alfabéticamente
console.log(ordenadosAlfabeticamente);

// 13.	Ordenar productos por precio con sort Objetivo: ordenar objetos.
// const productos = [
// { nombre: "Teclado", precio: 120000 },
// { nombre: "Mouse", precio: 50000 },
// { nombre: "Monitor", precio: 800000 },
// { nombre: "USB", precio: 30000 }
// ];
// Ordénalos del más barato al más caro.

const productos = [
{ nombre: "Teclado", precio: 120000 },
{ nombre: "Mouse", precio: 50000 },
{ nombre: "Monitor", precio: 800000 },
{ nombre: "USB", precio: 30000 }
]; // Arreglo original
const ordenadosPorPrecio = productos.sort((a, b) => a.precio - b.precio); // Usar sort para ordenar los productos del más barato al más caro - si el resultado es negativo, a va antes que b
console.log(ordenadosPorPrecio);

// 14.	Menú de día de la semana con switch Objetivo: tomar decisiones con múltiples casos.
// Solicita un número del 1 al 7 e imprime el día de la semana correspondiente:
// •	1 → Lunes
// •	2 → Martes
// •	3 → Miércoles
// •	4 → Jueves
// •	5 → Viernes
 
// •	6 → Sábado
// •	7 → Domingo
// Si el número no está entre 1 y 7, mostrar: "Día no válido".

const numero = 5;

switch(numero) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes 🎉");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día no válido");
}

// 15.	Clasificación de color con switch Objetivo: usar switch con texto. Solicita un color y muestra un mensaje:
// •	"rojo" → "Color de alerta"
// •	"verde" → "Color de avance"
// •	"amarillo" → "Color de precaución"
// •	cualquier otro → "Color no reconocido"

const color = "verde";

switch(color) { 
    case "rojo":
        console.log("Color de alerta");
        break;
    case "verde":
        console.log("Color de avance");
        break;
    case "amarillo":
        console.log("Color de precaución");
        break;
    default:
        console.log("Color no reconocido");
}

// 16.	Tabla del 5 con while
// Objetivo: repetir instrucciones con contador.
// Usa un ciclo while para imprimir la tabla del 5 desde: 5 x 1 = 5
// hasta:
// 5 x 10 = 50
// 16. Tabla del 5 con while
// Objetivo: repetir instrucciones con contador.

let i = 1;

while (i <= 10) { // Usar un ciclo while para imprimir la tabla del 5 desde: 5 x 1 = 5 hasta: 5 x 10 = 50
  console.log(`5 x ${i} = ${5 * i}`); // Imprimir la multiplicación de 5 por el contador i
  i++;
}

// 16.	Contar del 10 al 1 con while Objetivo: practicar decremento.
// Usa while para mostrar una cuenta regresiva desde 10 hasta 1. Al final imprime:
// "¡Despegue!"

let j = 10;

while (j >= 1) { // Usar while para mostrar una cuenta regresiva desde 10 hasta 1
  console.log(j); // Imprimir el valor actual del contador j
    j--;
}


// 17.	Sumar números hasta llegar a 100 con while Objetivo: repetir hasta cumplir condición.
// Crea un programa que vaya sumando números consecutivos comenzando en 1 hasta que la suma sea mayor o igual a 100.
 
// Debes mostrar:
// •	cada número sumado
// •	la suma final
// •	cuántos números fueron necesarios

// 17. Sumar números hasta llegar a 100 con while
// Objetivo: repetir hasta cumplir condición.

let suma1 = 0;
let numero7 = 1;
let contador = 0;

while (suma1 < 100) {
  console.log(`Sumando: ${numero7}`);
  
  suma1 += numero7;
  contador++;
  numero7++;
}

console.log(`Suma final: ${suma1}`);
console.log(`Cantidad de números usados: ${contador}`);

// 18.	Ejercicio combinado: filter + map Objetivo: encadenar métodos.
// const numeros = [3, 8, 15, 20, 7, 12, 1, 30];
// 1.	Filtra solo los números mayores que 10.
// 2.	Luego multiplícalos por 2.
// Resultado esperado:
// [30, 40, 24, 60]

const numeros7 = [3, 8, 15, 20, 7, 12, 1, 30]; // Arreglo original
const resultado = numeros7
  .filter(n => n > 10) // Filtrar solo los números mayores que 10
  .map(n => n * 2); // Multiplicar los números filtrados por 2
console.log(resultado);

// 19.	Ejercicio integrador: filter + sort + map + reduce Objetivo: integrar varios métodos en un solo problema.
// const ventas = [
// { producto: "Mouse", cantidad: 3, precio: 50000 },
// { producto: "Teclado", cantidad: 2, precio: 120000 },
// { producto: "Monitor", cantidad: 1, precio: 800000 },
// { producto: "USB", cantidad: 5, precio: 30000 }
// ];
// Realiza lo siguiente:
// 1.	Filtra los productos cuya cantidad sea mayor o igual a 2.
// 2.	Ordénalos de mayor a menor según el precio.
// 3.	Crea un nuevo arreglo con frases como: "Teclado - Total: 240000"
// 4.	Calcula con reduce el valor total de todas las ventas.

const ventas = [
{ producto: "Mouse", cantidad: 3, precio: 50000 },
{ producto: "Teclado", cantidad: 2, precio: 120000 },
{ producto: "Monitor", cantidad: 1, precio: 800000 },
{ producto: "USB", cantidad: 5, precio: 30000 }
];

const resultado3 = ventas
  .filter(v => v.cantidad >= 2)
  .sort((a, b) => b.precio - a.precio);

const frases = resultado3.map(v => `${v.producto} - Total: ${v.precio * v.cantidad}`);
const total = resultado3.reduce((acc, v) => acc + (v.precio * v.cantidad), 0);

console.log(frases);
console.log(total);
