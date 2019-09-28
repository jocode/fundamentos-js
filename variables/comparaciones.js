/**
 * Siempre que podamos, utilicemos el triple igual (===)
 */

var x = 4, y = '4';
// Compara los valores, sin importar el tipo de dato
console.log(x==y);

// Compara los valores y el tipo de dato de las variables
console.log(x===y);


// Comparaciones en objetos
var persona = {
  nombre: 'Johan'
}

var copia = persona;

var juan = {
  ...persona
}

console.log(persona==juan);