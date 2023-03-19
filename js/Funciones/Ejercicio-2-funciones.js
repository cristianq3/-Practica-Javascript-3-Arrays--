// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let texto = prompt("Ingrese su texto");

function stringCheck(unTexto) {
  if (unTexto === unTexto.toUpperCase()) {
    document.write(`Son todas <b class="resaltar" > MAYUSCULAS </b>`);
  } else if (unTexto === unTexto.toLowerCase()) {
    document.write(`Son todas <b class="resaltar" > minusuculas </b>`);
  } else {
    document.write(`Estan <b class="resaltar"> MezClaDaS </b>`);
  }
}

stringCheck(texto);
