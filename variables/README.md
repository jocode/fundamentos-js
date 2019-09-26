# Primeros pasos en JavaScript

### Variables

## Strings

Los strings son cadenas de texto. Para indicar que estamos usando una cadena de texto debemos de colocar las comillas simples.

En este curso utilizaremos los métodos:

- **toUpperCase**, que sirve para transformar un String a mayúsculas.
- **toLowerCase**, que sirve para transformar el string a minúsculas.

También usaremos el atributo:

- **length**, que nos indica la cantidad de caractéres que tiene un string.

Para concatenar dos strings se utiliza el símbolo (+)
var nombreCompleto = nombre + ’ ’ + apellido

### Números

En esta clase aprenderemos variables de tipo números y las operaciones más comunes en este tipo de variables.

En esta clase veremos operadores matemáticos como:

- suma ( + )
- resta ( - )
- multiplicación
- división

Recerda que en operaciones con decimales debemos realizar operaciones adicionales para conseguir un resultado preciso. Ej. **var total = ( precioDeVino * 100 * 3) / 100**

Para **redondear** una operación se utiliza la función: **Math.round**

> En javascript la manera de guardar decimanles no es tan precisa, porque destina cierta cantidad de bytes en la memoria para asignar un decimal.


## Funciones

Las funciones son fracciones de código reutilizable. En esta clase aprenderemos a definir e invocar nuestras funciones. Para definir una función utilizaremos la palabra reservada **“function”**.

**Delimitamos el cuerpo** de la función usando llaves **{ }**. Los parámetros de la función son variables que se pasan a la función escribíendolos entre paréntesis ()

Definir funciones nos sirve para reutilizar código. **_JavaScript es un lenguaje interpretado, esto quiere decir que intentará ejecutar el código sin importar si los parámetros que le pasemos a la función estén invertidos o incluso incompletos_**.

### Alcance de mas funciones

> Si una variable no está definida en el cuerpo de una función se dice que es de alcance global. Significa que se puede acceder desde cualquier función

El objeto global depende desde dónde se esté ejecutando JS
- Servidor en el entorno de Node
- En el navegador en el objeto **window**

**IMPORTANTE**
Si una variable no está definida dentro del cuerpo de una función hablamos de una variable global. Por el contrario, una variable definida dentro de una función es una variable local.

Para que la ejecución de una función no modifique una variable global usamos parámetros en lugar de pasar directamente la variable.

Es posible utilizar el mismo nombre para una variable global y para el parámetro de una función con un alcance local.


## Objetos

Vamos a empezar a trabajar con objetos, veremos cómo declararlos, cuáles son sus ventajas, cómo asignarles atributos y cómo trabajar con ellos dentro de las funciones.

**Los objetos se definen delimitados mediante llaves {}**

Un **atributo se compone de una clave (key) y un valor (value)**, que se **separan** entre sí por dos puntos **”:"**. Los valores pueden ser de tipo string, número, booleano, etc. Cada atributo está separado del siguiente por una coma. Un objeto puede tener todos los atributos que sean necesarios.

Escribir el nombre de un objeto separado por un punto del nombre de un atributo, nos permite acceder al valor de dicho atributo para ese objeto. Un objeto también se puede pasar como atributo en una función.

Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. Esto se consigue encerrando el nombre del atributo entre llaves { }.

### Desestructurar objetos

En esta clase aprenderemos otra forma de acceder a los atributos de los objetos que es la desestructurización de los mismos.
Para no duplicar las variables introducir el nombre de la variable como parámetro de la segunda variable. 

```js
var persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 15,
};

var {nombre} = persona;
console.log(persona);
```


## Parámetros como referencia o como valor

Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.

Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.

- Los objetos que se pasan por parámetros **se pasan por referencia**

```js
var juan = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 18
}

// Podemos devolver un nuevo objeto con un atributo modificado
function copiarObjeto(persona){
  // Copiamos el objeto anterior
  return {
    ...persona,
    edad: persona.edad+1
  }
}

console.log(copiarObjeto(juan));
```

## Comparaciones en JavaScript

Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X un valor numérico y a Y un string. **Para poder compararlos debemos agregar dos signos de igual (==). Esto los convierte al mismo tipo de valor y permite que se puedan comparar**.

**Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo**. Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen cinco tipos de datos que son primitivos:
- Boolean
- Null
- Undefined
- Number
- String
