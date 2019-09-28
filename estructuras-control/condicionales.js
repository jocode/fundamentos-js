let johan = {
  nombre: 'Johan',
  apellido: 'Mosquera',
  edad: 15,
  Ingeniero: true,
  cocinero: false,
  Guitarrista: true,
  Musico: true
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es:`);
  for (let attr in persona){
    if (persona[attr]===true){
      console.log(attr)
    }
  }
}


const MAYORIA_DE_EDAD = 18;

function esMayorEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD;
}

const mayorEdad = ({edad}) =>   edad>=MAYORIA_DE_EDAD;

console.log(mayorEdad(johan));

function imprimirMayorEdad(persona){
  if (mayorEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

imprimirProfesiones(johan);
imprimirMayorEdad(johan);