/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

 */

let ciudades = [];
let ciudad = "";

document.write("<h1> Ejercicio Nro 2 Arrays </h1>");
do {
  ciudad = prompt("Ingrese una ciudad y presione aceptar, "); // Pedir las ciudades
  if (ciudad !== null && ciudad !== "") {
    ciudades.push(ciudad); // Almacenar una por una las ciudades en el array
  }
} while (ciudad !== null); // Mientras no presione cancelar

document.write(
  `<strong > La longitud del arreglo es </strong> <b class="resaltar">` + ciudades.length + "</b> <br>"
); // mostrar la longitud todal del arreglo

document.write(
  `<strong>En la primer posicion del arreglo está </strong> ` + ciudades[1] + "<br>"
); // mostrar posicion 1
document.write(
  `<strong>En la tercer posicion del arreglo está </strong> ` + ciudades[3] + "<br>"
); // mostrar posicion 3
document.write(
  `<strong>En la última posicion del arreglo está </strong> ` + ciudades[ciudades.length - 1] + "<br>"
); // mostrar ultima posicion

ciudades.push("Paris"); // Se agrega mediante push en la ultima linea.

document.write (`<strong> El elemento que ocupa actualmente la posicion 2 es </strong> ${ciudades[2]} <br>`);

ciudades[2] = "Barcelona";

document.write (`<strong> El elemento de la posicion 2 se modifico y ahora es:  </strong> ${ciudades[2]} <br>`)


document.write("<strong> El array tiene los siguientes elementos:  </strong> <br>")

for (let i = 0; i < ciudades.length; i++) {

  document.write (ciudades[i] + "<br>");
  
}
document.write ()