# Asincronismo

## Funciones como parámetros

En JS podemos pasar funciones como parámetros.

En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.

## Cómo funciona el asincronismo en JavaScript

JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecución de ciertas funciones a otros procesos. Este modelo de concurrencia se llama EventLoop.

JavaScript delega en el navegador ciertas tareas y les asocia funciones que deberán ser ejecutadas al ser completadas. Estas funciones se llaman callbacks, y una vez que el navegador ha regresado con la respuesta, el callback asociado pasa a la cola de tareas para ser ejecutado una vez que JavaScript haya terminado todas las instrucciones que están en la pila de ejecución.

Si se acumulan funciones en la cola de tareas y JavaScript se encuentra ejecutando procesos muy pesados, el EventLoop quedará bloqueado y esas funciones pudieran tardar demasiado en ejecutarse.

> **No voy a bloquear el Event Loop**


## Cómo funciona el tiempo en JavaScript

En principio, **_cualquier tarea que se haya delegado al navegador a través de un callback, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado_**. Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantizan que el callback se ejcute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.

```js
console.log('a');
setTimeout(()=>console.log('b'), 0);
console.log('c');
```

Como ha sido puesto en la cola de tareas, por esa razón se ejecuta de último. Primero ejecuta las funciones principales, y luego ejecuta las que han sido puestas en la cola de tareas mediante callbacks como este ejemplo.



## Callbacks

Un **callback** es una **_función que se pasa a otra función como un argumento_**. Esta función se invoca, después, dentro de la función externa para completar alguna acción.

Usaremos **jquery** para hacer peticiones a un sitio web.

```js
$.get(lukeUrl, opts, function(){
  console.log(arguments);
});
```

Con **arguments** podemos ver los argumentos que recibe la función

```js
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';


// Hacemos un request
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = {crossDomain: true};

const onPersonResponse = function(person){
  console.log(`Hola, yo soy ${person.name}`);
};

$.get(lukeUrl, opts, onPersonResponse);
```


## Haciendo múltiples `request`

En esta clase accederemos a múltiples datos al mismo tiempo. Continuaremos trabajando con los jQuery y swapi.

> El orden el el que se soliciten los datos, no es necesariamente el orden el el que llegan. Este es el asincronismo en JS.

```js
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = {crossDomain: true};

const onPersonResponse = function(person){
  console.log(`Hola, yo soy ${person.name}`);
};

function obtenerPersonaje(id){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
  $.get(url, opts, onPersonResponse);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
```

## Manejando el Orden y el Asincronismo en JavaScript

Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada **CallbackHell**.

```js
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

  $.get(url, opts, (person) => {
    console.log(`Hola, yo soy ${person.name}`);

    // La llamada debe ir dentro del método de la petición
    if (callback){
      callback();
    }
  });
}

// callbackHell = El infierno de los callbacks
obtenerPersonaje(1, function() {
  obtenerPersonaje(2, function() {
    obtenerPersonaje(3, function() {
      obtenerPersonaje(4, function(){
        obtenerPersonaje(5, function(){
          obtenerPersonaje(6, function(){
            obtenerPersonaje(7);
          });
        });
      });
    });
  });
});
```


## Manejo de errores con callbacks

Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método **`fail()`**.

```js
$.get(url, opts, callback)
.fail( ()=> {
  console.log(`Suceció un error, no se pudo obtener el personaje ${id}`);
});
```

[Ver archivo callback.js](callback.js)


## Promesas

En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tres estados:
- pending
- fullfilled
- rejected

Las promesas se invocan de la siguiente forma:

```js
new Promise( ( resolve, reject ) => {
  // --- llamado asíncrono
  if( todoOK ) {
     // -- se ejecutó el llamado exitosamente
     resolve()
  } else {
     // -- hubo un error en el llamado
     reject()
  }
} )
```


En ejemplo de la API podemos tener lo siguiente

```js
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
.then(function(personaje){
  console.log(`Elpersonaje 1 es ${personaje.name}`);
})
.catch(onError);
```


## Promesas Encadenadas

A diferencia de los callbacks en el **CallbackHell**, que terminan estando anidados unos dentro de otros, cuando se usan **Promesas** la ejecución de las llamadas no se hacen de manera anidada sino de manera **encadenada**, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho más legible y mantenible.

Ejemplo de promesas encadenadas
```js
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
```


## Múltiples promesas en paralelo

Para hacer el llamado a múltiples promesas, nos apoyamos en un _array de ids con el que luego construimos otro arreglo de Promesas_, que pasaremos como parámetro a **`Promise.all( arregloDePromesas )`**, con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.

> _Las promesas tienen un gran potencial sobre los callbacks, podemos encadenarlas en paralelo, que con los callbacks no puede hacerse fácilmente._

```js
// Siguiendo con el ejemplo anterior, podemos reescribir el código usando la siguiente sintaxis.
var ids = [1,2,3,4,5,6,7];

var promesas = ids.map( id=> obtenerPersonaje(id));
Promise
.all(promesas)
.then(personajes => console.log(personajes))
.catch(onError);
```


## Async-await: lo último en asincronismo

**Async-await** es la manera más simple y clara de realizar tareas asíncronas. **Await** _detiene la ejecución del programa hasta que todas las promesas sean resueltas_. Para poder utilizar esta forma, hay que colocar **_async antes de la definición de la función_**, y encerrar el llamado a **`Promises.all()`** dentro de un bloque **_try … catch_**.

```js
async function obtenerPersonajes(){

  var ids = [1,2,3,4,5,6,7];
  var promesas = ids.map( id=> obtenerPersonaje(id));

  try {
    var personajes = await Promise.all(promesas);
    console.log(personajes)
  } catch(id){
    onError(id);
  }

}

obtenerPersonajes();
```


