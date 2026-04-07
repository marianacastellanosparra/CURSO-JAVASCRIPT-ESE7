// funcion toNonEmptyString , funcion que permite validar si un string no esta vaci

function toNonEmptyString(str) { // Validar que el valor es un string no vacío
  if (typeof str !== 'string' || str.trim() === '') { // Verificar si no es un string o si es un string vacío después de eliminar espacios en blanco
    throw new Error('El valor debe ser un string no vacío'); // Lanzar un error si la validación falla
  }
    return str;
}

function toNoEmptyString (value, label = 'texto') { // Validar que el valor es un string no vacío
    const str = String(value).trim(); // Convertir a string y eliminar espacios en blanco
    if (!str) { // Verificar si el string está vacío después de eliminar espacios en blanco
        throw new Error(`El ${label} no puede estar vacío`); // Lanzar un error con un mensaje personalizado si la validación falla
    }
    return str;

}
    
// si esta vacio lanza un error

//funcion titleCase, funcion que perASEmite convertir un string a titulo

 export function titleCase(text) {  // "hola mundo" -> "Hola Mundo"
    return text.toLowerCase()// Convertir a minúsculas Hola Mundo -> hola mundo
        .split(' ') // Dividir en palabras hola mundo -> ["hola", "mundo"]
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalizar la primera letra de cada palabra
        .join(' '); // Unir las palabras de nuevo en una cadena
}
//funcion slugify, funcion que permite convertir un string a slug ejemplo:
//  "hola mundo" - "hola-mundo"

export function slugify(text) { // "Hola Mundo" -> "hola-mundo"
    return text.toLowerCase() // Convertir a minúsculas Hola Mundo -> hola mundo
        .trim() // Eliminar espacios en blanco al inicio y al final
        .replace(/\s+/g, '-') // Reemplazar espacios en blanco por guiones
        .replace(/[^\w-]+/g, ''); // Eliminar caracteres no alfanuméricos excepto guiones
}

//[^\w-]+:
// \w = letras (a-z), números (0-9) y guion bajo _.
// ^ = negación → significa "todo lo que NO sea eso".
// - = permite guiones.
// + = uno o más caracteres.
// Elimina cualquier carácter raro como ! @ # % , . etc.
// Ejemplo: "hola-mundo!" → "hola-mundo".