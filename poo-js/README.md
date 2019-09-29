# Programación Orientada a Objetos en JavaScript

## Cómo funcionan las clases en JavaScript

Las **_clases son funciones_** cuya sintaxis tiene dos componentes:
- Expresiones
- Declaraciones

Dentro de una función, el valor de this depende de cómo es llamada ésta.

En Javascript no son clases como tal, son prototipos a diferencia de otros lenguajes de programación

```js
function Persona(nombre, apellido, altura){
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function(){
  if (this.altura >= 1.8){
    console.log(`Soy alto, mido ${this.altura} mts`);
  } else {
    console.log(`Soy bajo, mido ${this.altura} mts`);
  }
}

// new Crea nuevos objeto dado un prototipo
var johan = new Persona('Johan', 'Mosquera', 1.75);
var juan = new Persona('Juan', 'Mosquera', 1.7);
var maria = new Persona('Maria', 'Martinez',  1.82);
maria.saludar();
maria.soyAlto();
juan.saludar();
juan.soyAlto();
```

## Modificando un prototipo

JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.

Es importante ubicación de las funciones que va a tener el prototipo. Es recomendable colocarlas juntas y definirlas al principio del código.


## El contexto de las funciones: quién es **`this`** (arrow functions)

Al introducir el arrow function salió un error. El error del contexto de this en javascrip es uno de los errores más comunes.

_Recuerda que dentro de la **arrow function**, **this** está haciendo referencia al espacio global, a windows_.


## La verdad oculta sobre las clases en JavaScript

Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

Como tal JS no tiene un sistema de herencia. Tiene algo llamado **herencia prototipal**

> **La herencia como tal no existe en JS, no hay clases, hay prototipos. Y existe lo que es la herencia prototipal. Y buscará las propiedades del objeto en los prototipos superiores si no los encuentra, hasta llegar a object. Para ECMAScript < 2015**


## Clases en JavaScript

Las **clases** de JavaScript son **introducidas en el ECMAScript 2015** y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.

La palabra clave **extends** se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.

El método **constructor** es un **_método especial para crear e inicializar un objeto creado a partir de una clase_**.

- **ECMAScript** Es el estándar en el cual se basa JS para conformarse como lenguaje, es decir todas las actualizaciones que trae el lenguaje.

**RECORDAR QUE** Por debajo sigue siendo todos protitipos.


```js
class Persona {

  constructor(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  // En las clases, no es necesario colocar la palabra function
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }

  soyAlto(){
    return this.altura > 1.8;
  }

}

class Desarrollador extends Persona {

  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura);
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
  }

}
```