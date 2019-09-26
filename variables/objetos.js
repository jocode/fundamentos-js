// Las llaves definen un objeto
var johan = {
  nombre: 'Johan',
  apellido: 'Mosquera',
  edad: 15,
  sistemaEdad: 'Hexadecimal'
};

var juan = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 15,
  sistemaEdad: 'Decimal'
};

/* function imprimirNombreMayusculas(person){
  nombre = person.nombre.toUpperCase();
  console.log(nombre);
} */

// Desglosamos el objeto usando {atributo1, attr1, ...}
function imprimirNombreMayusculas({nombre}){
  if (nombre === undefined){
    console.log('No definido')
    return;
  }

  nombre = nombre.toUpperCase();
  console.log(nombre);
}

imprimirNombreMayusculas(johan);
imprimirNombreMayusculas(juan);
imprimirNombreMayusculas({nombre: 'Juanito'});

console.log('\nDesestructurar objetos');
//var nombre = juan.nombre;
var { nombre } = juan;
console.log(nombre);

var persona1 = {
  nombre: 'Neron',
  apellido: 'Navarrete',
  edad: 99
};
var persona2 = {
  nombre: 'Pepito',
  apellido: 'Perez',
  edad: 69
};
function imprimirNombreEdad(persona){
  let {nombre, edad} = persona;
  return `Hola, me llamo ${nombre} y tengo ${edad} años`;
}

console.log(imprimirNombreEdad(persona1));
console.log(imprimirNombreEdad(persona2));