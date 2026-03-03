// ==============================
// CONVERSOR INTERACTIVO
// ==============================


const readline = require("readline"); // Módulo para lectura interactiva desde consola

const rl = readline.createInterface({ // Crear interfaz de lectura
    input: process.stdin,    // Entrada estándar (teclado)
    output: process.stdout   // Salida estándar (consola) 
});

const temperatura = ["C", "F", "K"];  // Unidades de temperatura soportadas
const longitud = ["m", "km", "cm"];  // Unidades de longitud soportadas

function convertir(value, from, to) {   // Función para convertir entre unidades

    // Validar número
    if (!Number.isFinite(value)) {  // Verificar que el valor sea un número finito
        return "❌ Error: el valor ingresado debe ser un número finito (no texto ni infinito).";  // Retornar mensaje de error si no es un número válido
    }

    // Validar unidades soportadas
    if (![...temperatura, ...longitud].includes(from) ||  // Verificar que la unidad de origen esté en las listas de unidades soportadas
        ![...temperatura, ...longitud].includes(to)) {  // Verificar que la unidad de destino esté en las listas de unidades soportadas
        return "❌ Error: unidad no válida. Solo se permiten unidades de temperatura (C, F, K) o longitud (m, km, cm).";    }

    // Validar misma categoría
    const esTemp = temperatura.includes(from) && temperatura.includes(to);   // Verificar que ambas unidades sean de la categoría de temperatura
    const esLong = longitud.includes(from) && longitud.includes(to);   // Verificar que ambas unidades sean de la categoría de longitud

    if (!esTemp && !esLong) {  // Si no son de la misma categoría, retornar error
        return "❌ Error: categorías incompatibles";
    }

    let resultado;

    // ================= TEMPERATURA =================
    if (esTemp) { // Si ambas unidades son de temperatura, realizar la conversión
        let celsius;  // Variable intermedia para convertir a Celsius

        if (from === "C") celsius = value;
        if (from === "F") celsius = (value - 32) * 5 / 9;
        if (from === "K") celsius = value - 273.15;

        if (to === "C") resultado = celsius;
        if (to === "F") resultado = (celsius * 9 / 5) + 32;
        if (to === "K") resultado = celsius + 273.15;
    }

    // ================= LONGITUD =================
    if (esLong) {  // Si ambas unidades son de longitud, realizar la conversión
        let metros;   // Variable intermedia para convertir a metros

        if (from === "m") metros = value;  
        if (from === "km") metros = value * 1000;
        if (from === "cm") metros = value / 100;

        if (to === "m") resultado = metros;
        if (to === "km") resultado = metros / 1000;
        if (to === "cm") resultado = metros * 100;
    }

    return `✅ Resultado: ${resultado.toFixed(2)} ${to}`;   // Retornar resultado formateado con dos decimales
}

// ==============================
// Flujo interactivo
// ==============================

rl.question("Ingrese valor: ", (valorInput) => {  // Preguntar al usuario por el valor a convertir

    const value = Number(valorInput);  // Convertir el valor ingresado a número

    rl.question("Ingrese unidad origen (C, F, K, m, km, cm): ", (from) => {  // Preguntar al usuario por la unidad de origen

        rl.question("Ingrese unidad destino (C, F, K, m, km, cm): ", (to) => {  // Preguntar al usuario por la unidad de destino
 
            const resultado = convertir(value, from.trim(), to.trim());  // Llamar a la función de conversión con los valores ingresados, eliminando espacios en blanco
            console.log(resultado);

            rl.close();  // Cerrar la interfaz de lectura después de mostrar el resultado
        });
    });
});