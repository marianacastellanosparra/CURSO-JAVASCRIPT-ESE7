"use strict";

// Funciones setup + validaciones base

function toNumberString(value, label = "Valor") {// Esta función se encarga de convertir un valor a número y verificar que sea un número válido. Si el valor no es un número válido, lanza un error con un mensaje que indica que el valor debe ser un número válido .
    const n = Number(value);
  if (!Number.isFinite(n)) { // Number.isFinite() es un método que se utiliza para verificar si un valor es un número finito. Si el valor no es un número finito (por ejemplo, si es NaN, Infinity o -Infinity), la función lanza un error con un mensaje que indica que el valor debe ser un número válido.
    throw new Error(`${label} debe ser un número válido`);
    }
    return n;
}

function assertNonNegative(value, label = "Valor") { // Esta función se encarga de verificar que el valor sea un número no negativo. Si el valor es negativo, lanza un error con un mensaje que indica que el valor debe ser un número no negativo.
  if (value < 0) {
    throw new Error(`${label} debe ser un número no negativo`);
  }
}

function toNonEmptyString(value, label = "Valor") {// Esta función se encarga de convertir un valor a cadena de texto y verificar que no sea una cadena vacía. Si el valor es una cadena vacía, lanza un error con un mensaje que indica que el valor no puede ser una cadena vacía.
  const s = String(value).trim();
    if (s.length === 0) {
    throw new Error(`${label} no puede ser una cadena vacía`);
}
    return s;
}

// Paso 1: Normalizar gastos

function normalizeExpense(raw) { //raw es un objeto que representa un gasto sin normalizar, con propiedades como id, fecha, categoria, descripcion y monto. La función normalizeExpense se encarga de validar y normalizar estos datos para asegurarse de que sean consistentes y estén en el formato correcto antes de ser utilizados en el análisis de gastos.

    const id = toNumberString(raw.id, "ID");
    const fecha = toNonEmptyString(raw.fecha, "Fecha");
    const categoria = toNonEmptyString(raw.categoria, "Categoría");
    const descripcion = toNonEmptyString(raw.descripcion, "Descripción");
    const monto = toNumberString(raw.monto, "Monto");

    assertNonNegative(monto, "Monto");

  return {
    id,
    fecha,
    categoria,
    descripcion,
    monto,
  };
}

// Paso 2: Dataset de ejemplo

const expenses = [
  normalizeExpense({
    id: "1", // "e1" era un string, pero ahora es un número.
    fecha: "2024-01-15",
    categoria: "Alimentación",
    descripcion: "Compra en supermercado",
    monto: 850000,
  }),
  normalizeExpense({
    id: "2", // "e2" era un string, pero ahora es un número.
    fecha: "2024-01-20",
    categoria: "Transporte",
    descripcion: "Pasaje de bus",
    monto: 150000,
  }),
  normalizeExpense({
    id: "3", // "e3" era un string, pero ahora es un número.
    fecha: "2024-01-25",
    categoria: "Entretenimiento",
    descripcion: "Entrada al cine",
    monto: 500000,
  }),
  normalizeExpense({ // Antes era nomalizeExpense, pero el nombre correcto es normalizeExpense
    id: "4", // "e4" era un string, pero ahora es un número.
    fecha: "2024-01-30",
    categoria: "Salud",
    descripcion: "Consulta médica",
    monto: 200000,
  }),
  normalizeExpense({// Antes era nomalizeExpense, pero el nombre correcto es normalizeExpense
    id: "5", // "e5" era un string, pero ahora es un número.
    fecha: "2024-02-05",
    categoria: "Educación",
    descripcion: "Curso en línea",
    monto: 120000,
  }),
      normalizeExpense({ // Antes era nomalizeExpense, pero el nombre correcto es normalizeExpense
      id: "6",
      fecha: "2024-02-05",
      categoria: "Educación",
      descripcion: "Alimentacion",
      monto: 1200000,
    }),
      normalizeExpense({ // Antes era nomalizeExpense, pero el nombre correcto es normalizeExpense
      id: "7", // El ID debe ser único, porque el ID sirve para identificar un registro específico. 
      fecha: "2024-02-05",
      categoria: "Salud",
      descripcion: "medicamentos",
      monto: 1200000,
    }),
    normalizeExpense({ // Antes era nomalizeExpense, pero el nombre correcto es normalizeExpense
      id: "8", // El ID debe ser único, porque el ID sirve para identificar un registro específico.
      fecha: "2024-02-05",
      categoria: "Entretenimiento",
      descripcion: "Parque de diversiones",
      monto: 1200000,
    }),
];

// Paso 3: estadísticas básicas

function calStats(expenses) {
  if (expenses.length === 0) {
    return {
      total: 0,
      promedio: 0,
      maximo: 0,
      minimo: 0,
    };
  }

  const values = expenses.map((e) => e.monto); // Extraemos solo los montos para calcular estadísticas

  const total = values.reduce((acc, n) => acc + n, 0);
  const minimo = Math.min(...values);
  const maximo = Math.max(...values);
  const promedio = total / values.length;

  return { total, promedio, maximo, minimo };
}

// Paso 4: Totales por categoría

function totalByCategory(expenses) {
  return expenses.reduce((acc, e) => {
    acc[e.categoria] = (acc[e.categoria] || 0) + e.monto; // si la categoría no existe, se inicializa en 0 antes de sumar el monto, si ya existe, se suma el monto al total acumulado de esa categoría.
    return acc;
  }, {});
}

// Paso 5: Formato moneda

function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

// Paso 6: Reporte en consola

function printReport(expenses) {
  const stats = calStats(expenses);
  const byCat = totalByCategory(expenses); // Aquí se obtiene el total acumulado de gastos para cada categoría.

  console.group("REPORTE - ANALIZADOR DE GASTOS");

  console.log("Resumen:");
  console.table([
    {
      Total: formatCOP(stats.total),
      Promedio: formatCOP(stats.promedio),
      Minimo: formatCOP(stats.minimo),
      Maximo: formatCOP(stats.maximo),
      Registros: expenses.length,
    },
  ]);

 // Mostrar totales por categoría
  console.log("Totales por categoría:");
  console.table(byCat); // Aquí se muestra el total acumulado de gastos para cada categoría.

  console.groupEnd();
}

// Ejecutar reporte

printReport(expenses);

