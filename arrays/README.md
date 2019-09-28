# Arrays

## Introducción a Arrays

Los arrays son estructuras que nos permiten organizar elementos dentro de una collección. Estos elementos pueden ser números, strings, booleanos, objetos, etc.

```js
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

var personas = [johan, juan]
;
for (var i = 0; i < personas.length; i++){
  let persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)} mts`);
}

// Iterando con ciclo con for of
console.log("\nIterando con for of");
for (let persona of personas){
  console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)} mts`);
}
```

## Filtrar un Array

Para **filtrar** siempre necesitamos **establecer una condición**. En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.

El método **`filter ( )`** crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada.

Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío.

**`filter()`** nos devolverá un nuevo array


## Transformar un array

El método **`map()`** itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.

Al igual que **filter**, **map** genera un nuevo arrays con los elementos modificados y también modifica los valores del array original.

Si al arrow function se le coloca paréntesis, seguido de llaves podemos retornar ese objeto.

```js
var personas = [johan, juan, maria, paula];

const alturaACentimetros = (persona) => ({
  // Devolvemos un nuevo objeto, sin afectar los datos del primer objeto
    ...persona,
    altura: persona.altura * 100
});

var personasCms = personas.map(alturaACentimetros);;

console.log(personasCms);
```


## Reducir un array a un valor

El método **reduce()** nos permite reducir, mediante una función que se aplica a cada uno de los elemento del **array**, todos los elementos de dicho array, **a un valor único**.

```js
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


var personas = [johan, juan];

// reduce(funcion, valorInicial), reduce un array a un valor único

const reducir = (acum, {cantidadLibros}) => acum + cantidadLibros;

var totalDeLibros = personas.reduce(reducir, 0);

console.log(`En total todos tiene ${totalDeLibros} libros`);
```