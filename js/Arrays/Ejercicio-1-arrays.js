// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

let meses = [
  `Enero`,
  `Febrero`,
  `Marzo`,
  `Abril`,
  `Mayo`,
  `Junio`,
  `Julio`,
  `Agosto`,
  `Setiembre`,
  `Octubre`,
  `Noviembre`,
  `Diciembre`];

document.write(`<h1> Los meses del año listados </h1>`);
document.write(`<ul>`);

for (i = 0; i <= meses.length - 1; i++) {
  document.write(`<li> ${meses[i]} </li>`);
}

document.write(`</ul>`);
