var johan = {
  nombre: 'Johan',
  apellido: 'Mosquera',
  edad: 15,
  peso: 62
}

console.log(`Al inicio del año ${johan.nombre} pesa ${johan.peso}Kg`);

/* 
function aumentarDePeso(persona){
  return persona.peso += 200;
}
 */
const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANIO = 365;

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO;
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO;

for (let i = 0; i <= DIAS_DEL_ANIO; i++){
  var random = Math.random();
  
  if (random < 0.25){
    // Aumenta de peso
    aumentarDePeso(johan);
  } else if (random < 0.5) {
    // Adelgazar
    adelgazar(johan);
  }
}

console.log(`Al final del año ${johan.nombre} pesa ${johan.peso.toFixed(1)}Kg`)