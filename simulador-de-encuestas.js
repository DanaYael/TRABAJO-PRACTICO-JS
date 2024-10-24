// Enunciado: Simulación de una encuesta de satisfacción

// Descripción: Imagina que trabajas en un restaurante y se realizó una encuesta de satisfacción con los clientes.
// Las respuestas de la encuesta se registran como números enteros entre 1 y 10, donde:
// 1-Cuales El promedio de satisfacción.

const arraysNotas = [
  8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10,
];

let sumarArrays = 0;

for (let i = 0; i < arraysNotas.length; i++) {
  sumarArrays += arraysNotas[i];
}

function Promedio() {
  return sumarArrays / arraysNotas.length;
}

document.write(`El promedio de satisfaccion  es: ${Promedio()}<br>`);

// 2 -Cuántos clientes dieron una calificación mayor o igual a 7 (considerados satisfechos).

let clientesSatisfechos = 0;

for (let j = 0; j < arraysNotas.length; j++) {
  if (arraysNotas[j] >= 7) {
    clientesSatisfechos++;
  }
}

document.write(
  `El número de clientes satisfechos es: ${clientesSatisfechos}<br>`
);

// 3-Cuántos clientes dieron una calificación menor o igual a 4 (considerados insatisfechos).

let clientesInsatisfechos = 0;

for (let j = 0; j < arraysNotas.length; j++) {
  if (arraysNotas[j] <= 4) {
    clientesInsatisfechos++;
  }
}
document.write(
  `El número de clientes insatisfechos es: ${clientesInsatisfechos}<br>`
);

// 4-El porcentaje de clientes que están satisfechos e insatisfechos.

const totalClientes = arraysNotas.length;

let porcentajeSatisfechos = (clientesSatisfechos / totalClientes) * 100;
let porcentajeInSatisfechos = (clientesInsatisfechos / totalClientes) * 100;

document.write(
  `El porcentaje de clientes Satisfechos es: ${porcentajeSatisfechos.toFixed()} <br>`
);

document.write(
  `El porcentaje de clientes Insatisfechos es: ${porcentajeInSatisfechos.toFixed()}<br>`
);

// 5- La calificación que se repitió más veces (moda).

const conteoCalificaciones = {};

for (let i = 0; i < arraysNotas.length; i++) {
  const calificacion = arraysNotas[i];

  if (conteoCalificaciones[calificacion]) {
    conteoCalificaciones[calificacion]++;
  } else {
    conteoCalificaciones[calificacion] = 1;
  }
}

// Encontrar la moda
let moda = null;
let maxConteo = 0;

for (const calificacion in conteoCalificaciones) {
  if (conteoCalificaciones[calificacion] > maxConteo) {
    maxConteo = conteoCalificaciones[calificacion];
    moda = calificacion;
  }
}

document.write(
  `La calificación que se repitió más veces (moda) es: ${moda} (repetido ${maxConteo} veces)`
);
