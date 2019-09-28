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
const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANIO = 365;

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO;
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO;
const comeMucho = ()=> Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = johan.peso - 3;
var dias = 0;
// Para adelgazar 3Kg

while (johan.peso > META){
  if (comeMucho()){
    // Aumenta de peso
    aumentarDePeso(johan);
  }
  if (realizaDeporte()){
    // Adelgazar
    adelgazar(johan);
  }
  dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${johan.nombre} adelgazó 3Kg`)