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

console.log(personas);

for (var i = 0; i < personas.length; i++){
  let persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)} mts`);
}

// Iterando con ciclo con for of
console.log("\nIterando con for of");
for (let persona of personas){
  console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)} mts`);
}