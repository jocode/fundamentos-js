const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function obtenerPersonaje(id) {

  return new Promise((resolve, reject) => {

    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, function(data){
        resolve(data);
    })
    .fail(()=>reject(id));

  });
}

function onError(id){
  console.log(`Sucedióun error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
.then(personaje1 =>{
  console.log(`Elpersonaje 1 es ${personaje1.name}`);

  return obtenerPersonaje(2);
})
.then(personaje2 => {
  console.log(`Elpersonaje 2 es ${personaje2.name}`);

  return obtenerPersonaje(3);
})
.then(personaje => {
  console.log(`Elpersonaje 3 es ${personaje.name}`);

  return obtenerPersonaje(4);
})
.then(personaje => {
  console.log(`Elpersonaje 4 es ${personaje.name}`);

  return obtenerPersonaje(5);
})
.then(personaje => {
  console.log(`Elpersonaje 5 es ${personaje.name}`);

  return obtenerPersonaje(6);
})
.then(personaje => {
  console.log(`Elpersonaje 6 es ${personaje.name}`);
})
.catch(onError);