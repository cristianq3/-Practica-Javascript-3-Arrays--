/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */

let resultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let primerDado = 0;
let segundoDado = 0;
let suma = 0;
let contadorRepeticion = 0;
let contadorSumas = 2;

do {
  primerDado = Math.floor(Math.random() * 6) + 1;
  segundoDado = Math.floor(parseInt(Math.random() * 6) + 1);
  suma = primerDado + segundoDado;

  switch (suma) {
    case 2:
      resultados[0] += 1;
      contadorRepeticion++;
      break;
    case 3:
      resultados[1] += 1;
      contadorRepeticion++;
      break;
    case 4:
      resultados[2] += 1;
      contadorRepeticion++;
      break;
    case 5:
      resultados[3] += 1;
      contadorRepeticion++;
      break;
    case 6:
      resultados[4] += 1;
      contadorRepeticion++;
      break;
    case 7:
      resultados[5] += 1;
      contadorRepeticion++;
      break;
    case 8:
      resultados[6] += 1;
      contadorRepeticion++;
      break;
    case 9:
      resultados[7] += 1;
      contadorRepeticion++;
      break;
    case 10:
      resultados[8] += 1;
      contadorRepeticion++;
      break;
    case 11:
      resultados[9] += 1;
      contadorRepeticion++;
      break;
    case 12:
      resultados[10] += 1;
      contadorRepeticion++;
      break;

      defaut: null;
  }
} while (contadorRepeticion <= 51);

document.write(
  `<h1 class="resaltar">Cantidad de veces que se encontró la multiplicación:</h1>`
);
document.write(`<ul>`);
for (i = 1; i < resultados.length; i++) {
  document.write(
    `<li> La suma <b class="resaltar">${contadorSumas}</b>se realizó :` +
      `<b> ${resultados[i]}</b> veces. </li>`
  );
  contadorSumas++;
}
document.write(`</ul>`);
