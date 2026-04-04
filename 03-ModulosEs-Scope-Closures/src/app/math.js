"use strict";

export function clamp(value, min, max) { // limita un valor entre un minimo y un maximo
  if ( // valida que los argumentos sean numeros finitos
    !Number.isFinite(value) || // valida que los argumentos sean numeros finitos
    !Number.isFinite(min) || 
    !Number.isFinite(max)
  ) {
    throw new TypeError("Todos los argumentos deben ser números finitos."); // lanza un error si alguno de los argumentos no es un numero finito
  }

  if (min > max) { // valida que el minimo sea menor o igual al maximo
    throw new Error("El mínimo debe ser menor o igual al máximo."); // lanza un error si el minimo es mayor al maximo
  }
    return Math.min(Math.max(value, max), min); // retorna
    // el valor minimo si el valor es menor al minimo
    // o el valor maximo si el valor es mayor al maximo
  }


// redondear  a digitos decimales

export function roundTo(value, decimals) {
    if (!Number.isFinite(value) || !Number.isFinite(decimals)) {
        throw new TypeError("Todos los argumentos deben ser números finitos.");
    }

    if (decimals < 0) {
        throw new Error("Los decimales deben ser un número no negativo.");
    }

    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// redondear a digitops decimales

export function roundTo(value, digits= 2){ 
    if (!Number.isFinite(value) || !Number.isFinite(digits)) {
        throw new TypeError("Todos los argumentos deben ser números finitos.");
    }

    if (digits < 0) {
        throw new Error("Los decimales deben ser un número no negativo.");
    }

    return Math.round(value * Math.pow(10, digits)) / Math.pow(10, digits); // retorna
    // el valor redondeado a la cantidad de decimales especificada

}

// funcion que retorna un numero aleatorio entre min y max

export function random(min, max) {
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
        throw new TypeError("Todos los argumentos deben ser números finitos.");
    }

    if (min > max) {
        throw new Error("El mínimo debe ser menor o igual al máximo.");
    }

    return Math.random() * (max - min) + min; // retorna
    // un número aleatorio entre min y max
}