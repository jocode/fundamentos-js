var johan = {
  nombre: 'Johan',
  apellido: 'Mosquera',
  altura: 1.75,
  cantidadLibros: 12
}

var juan = {
  nombre: 'Juan',
  apellido: 'Mosquera',
  altura: 1.70,
  cantidadLibros: 112
}

var maria = {
  nombre: 'Maria',
  apellido: 'Mosquera',
  altura: 1.30,
  cantidadLibros: 37
}

var paula = {
  nombre: 'Paula',
  apellido: 'Lalinde',
  altura: 1.70,
  cantidadLibros: 69
}

var personas = [johan, juan, maria, paula];

// reduce(funcion, valorInicial), reduce un array a un valor único

const reducir = (acum, {cantidadLibros}) => acum + cantidadLibros;

var totalDeLibros = personas.reduce(reducir, 0);

console.log(`En total todos tiene ${totalDeLibros} libros`);

/* var acum = 0; 
for (let persona of personas){
  acum += persona.cantidadLibros;
}

console.log(acum); */

