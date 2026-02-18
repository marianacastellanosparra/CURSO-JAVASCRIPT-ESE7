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

