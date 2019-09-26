var juan = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 18
}

function cumpleanos(persona){
  persona.edad += 1;
}

// Podemos devolver un nuevo objeto con un atributo modificado
function copiarObjeto(persona){
  // Copiamos el objeto anterior
  return {
    ...persona,
    edad: persona.edad+1
  }
}

console.log(juan);
cumpleanos(juan);
console.log(juan);
console.log(copiarObjeto(juan));