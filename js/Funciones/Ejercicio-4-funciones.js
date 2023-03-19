/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */

let numero = parseInt(prompt("Ingrese un número para multiplicar"));

function tablaDel(numeroMultiplicar) {
  let tabla = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 1; i <= 10; i++) {
    tabla[i] = numeroMultiplicar * i;
    document.write(
      `<b> ${numeroMultiplicar} multiplicado por ${i} es igual a <b class="resaltar"> ${tabla[i]} </b> <br>.<br> `
    );
  }
}

tablaDel(numero);
