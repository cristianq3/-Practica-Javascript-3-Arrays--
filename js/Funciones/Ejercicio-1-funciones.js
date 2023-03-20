// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let numeroEntero = parseInt(prompt("Ingrese el numero para saber si es par o impar"));

function mod2(numero) {
      if (numero % 2 === 0) {

    return`El número ${numero} es <b class="resaltar">PAR </b>`;
  } else {
    return`El número ${numero} es <b class="resaltar">IMPAR </b>`;
  }
 
}

let mostrarNumero = mod2(numeroEntero);

document.write(mostrarNumero)
