// ==============================
// CONVERSOR INTERACTIVO
// ==============================

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const temperatura = ["C", "F", "K"];
const longitud = ["m", "km", "cm"];

function convertir(value, from, to) {

    // Validar número
    if (!Number.isFinite(value)) {
        return "❌ Error: valor inválido";
    }

    // Validar unidades soportadas
    if (![...temperatura, ...longitud].includes(from) ||
        ![...temperatura, ...longitud].includes(to)) {
        return "❌ Error: unidad no soportada";
    }

    // Validar misma categoría
    const esTemp = temperatura.includes(from) && temperatura.includes(to);
    const esLong = longitud.includes(from) && longitud.includes(to);

    if (!esTemp && !esLong) {
        return "❌ Error: categorías incompatibles";
    }

    let resultado;

    // ================= TEMPERATURA =================
    if (esTemp) {
        let celsius;

        if (from === "C") celsius = value;
        if (from === "F") celsius = (value - 32) * 5 / 9;
        if (from === "K") celsius = value - 273.15;

        if (to === "C") resultado = celsius;
        if (to === "F") resultado = (celsius * 9 / 5) + 32;
        if (to === "K") resultado = celsius + 273.15;
    }

    // ================= LONGITUD =================
    if (esLong) {
        let metros;

        if (from === "m") metros = value;
        if (from === "km") metros = value * 1000;
        if (from === "cm") metros = value / 100;

        if (to === "m") resultado = metros;
        if (to === "km") resultado = metros / 1000;
        if (to === "cm") resultado = metros * 100;
    }

    return `✅ Resultado: ${resultado.toFixed(2)} ${to}`;
}

// ==============================
// Flujo interactivo
// ==============================

rl.question("Ingrese valor: ", (valorInput) => {

    const value = Number(valorInput);

    rl.question("Ingrese unidad origen (C, F, K, m, km, cm): ", (from) => {

        rl.question("Ingrese unidad destino (C, F, K, m, km, cm): ", (to) => {

            const resultado = convertir(value, from.trim(), to.trim());
            console.log(resultado);

            rl.close();
        });
    });
});