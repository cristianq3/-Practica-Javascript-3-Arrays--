/* 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:
Input:
lado A = 24
lado B = 5

Output: 58
 */



let a = parseInt(prompt("Ingrese el alto"));
let b = parseInt(prompt("ingrese el ancho"));

const perimetro = (ladoA,ladoB) =>(2*(ladoA+ladoB));

document.write(perimetro(a,b));