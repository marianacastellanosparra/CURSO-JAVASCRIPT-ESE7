//funcion sumArray, funcion que permite sumar todos los elementos de un array
//funcion averageArray, funcion que permite calcular el promedio de todos los elementos de un array
//funcion groupArray, funcion que permite agrupar los elementos de un array por una propiedad

"use strict";// modo estricto

    // 1. sumArray
    // Esta función recorre el arreglo y acumula los valores. Es la base para muchas operaciones estadísticas.

    const sumArray = (arr) => { // arr es el arreglo de números que se va a sumar
  return arr.reduce((acc, val) => acc + val, 0); // reduce es un método de los arreglos que permite acumular un valor a través de una función. 
  //En este caso, la función toma el acumulador (acc) y el valor actual (val) y los suma, comenzando con un valor inicial de 0.
};

// 2. averageArray
// Esta función calcula el promedio de los elementos en el arreglo.

const averageArray = (arr) => {
  if (arr.length === 0) return 0; // evita division por cero
  return sumArray(arr) / arr.length; // utiliza la funcion sumArray para obtener la suma total y luego divide por la cantidad de elementos
};



// 3. groupArray
// Esta función agrupa los elementos del arreglo por una propiedad específica.
const groupArray = (arr, property) => { //arr es el arreglo a agrupar y property es la propiedad por la cual se va a agrupar
  return arr.reduce((acc, obj) => { // recorre el arreglo y acumula los objetos en un nuevo objeto agrupado por la propiedad especificada
    const key = obj[property]; // obtiene el valor de la propiedad especificada en el objeto actual
    if (!acc[key]) { // si el valor de la propiedad no existe en el acumulador, se crea un nuevo arreglo para ese valor
      acc[key] = []; // crea un nuevo arreglo para el valor de la propiedad
    }
    acc[key].push(obj); // agrega el objeto actual al arreglo correspondiente en el acumulador
    return acc; // retorna el acumulador actualizado para la siguiente iteracion
  }, {});
};

//Ejemplos de uso de las funciones

// 1. Datos de prueba
const numeros = [15, 25, 10, 50];
const productos = [
  { nombre: "Teclado", precio: 100, categoria: "Electrónica" },
  { nombre: "Monitor", precio: 300, categoria: "Electrónica" },
  { nombre: "Silla", precio: 150, categoria: "Muebles" }
];

// 2. Ejecución de las funciones
const total = sumArray(numeros); // suma total de los numeros en el arreglo
const promedio = averageArray(numeros); // promedio de los numeros en el arreglo
const agrupados = groupArray(productos, "categoria"); // agrupa los productos por categoría

// 3. Mostrar resultados
console.log("Suma Total:", total); 
console.log("Promedio:", promedio);
console.log("Agrupado por Categoría:", agrupados);



