var johan = {
  nombre: 'Johan',
  apellido: 'Mosquera',
  altura: 1.75
}

var juan = {
  nombre: 'Juan',
  apellido: 'Mosquera',
  altura: 1.70
}

var maria = {
  nombre: 'Maria',
  apellido: 'Mosquera',
  altura: 1.30
}

var paula = {
  nombre: 'Paula',
  apellido: 'Lalinde',
  altura: 1.70
}

var personas = [johan, juan, maria, paula];

const esAlta= (persona) => persona.altura >= 1.7;
var personasAltas = personas.filter(esAlta);
/* var personasAltas = personas.filter(function(persona){
  return persona.altura >= 1.7;
}) */

console.log(personasAltas);