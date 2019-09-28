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

const alturaACentimetros = (persona) => ({
  // Devolvemos un nuevo objeto, sin afectar los datos del primer objeto
    ...persona,
    altura: persona.altura * 100
});

var personasCms = personas.map(alturaACentimetros);;

console.log(personasCms);