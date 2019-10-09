function diasEntreFechas(fecha1, fecha2){
  const unDia = 1000*60*60*24;
  const diff = Math.abs(fecha1 - fecha2);

  return  Math.floor(diff/unDia)
}

const hoy = new Date()
const nacimiento = new Date(1998, 5, 11)

const anios = diasEntreFechas(hoy, nacimiento)/365;

console.log(anios);