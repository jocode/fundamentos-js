# Complementos

## var, let y const: las diferencias entre ellos

- **`var`** es la manera más antigua de declarar variables. No es muy estricta en cuanto al alcance, ya que al declarar variables de esta forma, dichas variables podrán ser accedidas, e incluso modificaddas, tanto dentro como fuera de los bloques internos en una función.

- **`let`** por otra parte, el alcance se reduce al bloque (las llaves) en el cual la variable fue declarada. Fuera de este bloque la variable no existe. Una vez declarada la variable con let, no se puede volver a declarar con en ninguna otra parte de la función.

- **`const`** al igual que ““let”” se define en el contexto o alcance de un bloque, a diferencia de let y var, las varibles definidas como constantes (const), ya no podrán ser modificadas ni declaradas nuevamente, en ninguna otra parte de la función o el contexto en el que ya existen.

La recomendación es reducir siempre al mínimo el alcance de nuestras variables, por lo que se debe usar let en lugar de var mientras sea posible.

```js
var johan = {
      nombre: 'Johan',
      apellido: 'Mosquera',
      edad: 15
    }

    function esMayorDeEdad(persona){
      let mensaje
      const MAYORIA_DE_EDAD = 18;
      if (persona.edad > MAYORIA_DE_EDAD){
        mensaje = 'Es mayor de edad';
      } else {
        mensaje = "Es menor de edad";
      }
      console.log(mensaje);
    }  

    // esMayorDeEdad(johan);

    for (var i = 0; i < 10; i++){
      console.log(i)
    }
    console.log(`Terminó el for, El valor de i es ${i}`);

```

## ¿Hace cuántos días naciste?

Con variables de tipo Date, se pueden realizar operaciones de suma y resta similares a las que se realizan con números. El resultado que se obtiene está en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales para llevarlos a días, meses o años según queramos. También aplica para Horas, Minutos, Segundos y Milisegundos.

```js
function diasEntreFechas(fecha1, fecha2){
  const unDia = 1000*60*60*24;
  const diff = Math.abs(fecha1 - fecha2);

  return  Math.floor(diff/unDia)
}

const hoy = new Date()
const nacimiento = new Date(1998, 5, 11)

const anios = diasEntreFechas(hoy, nacimiento)/365;

console.log(anios);
```


## Funciones recursivas

La recursividad es un concepto muy importante en cualquier lenguaje de programación. Una función recursiva es básicamente aquella que se llama (o se ejecuta) a sí misma de forma controlada, hasta que sucede una condición base.


```js
function divisionEntera(dividendo, divisor){
  if (dividendo < divisor){
    return 0
  }

  return 1 + divisionEntera(dividendo-divisor, divisor);
}

let cociente = divisionEntera(12, 4);
console.log(cociente);
```

## Memoización: ahorrando cómputo

La memoización es una técnica de programación que nos permite ahorrar cómputo o procesamiento en JavaScript, al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usar memoria cache.

```js
function factorial(n){

// Guardar en la cache
if (!this.cache){
  this.cache = {}
}

debugger
if (this.cache[n]){
  return this.cache[n]
}

if (n === 1){
  return 1
}
this.cache[n] = n*factorial(n-1)
debugger
return this.cache[n]
// 6 * factorial(5)
}

console.log(factorial(6))
```


## Entiende los closures de JavaScript

Un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones. Un aspecto fundamental de los closures es que son funciones que retornan otras funciones.

```js
function crearSaludo(finalDeFrase){
  return function(nombre){
    console.log(`Hola ${nombre} ${finalDeFrase}`)
  }
}

const saludoColombiano = crearSaludo('Todobien') // Hola Johan Todo bien
const saludoArgentino = crearSaludo('che'); // Hola Johan che
const saludoMexicano = crearSaludo('güey') // Hola Johan güey

saludoColombiano('Johan')
saludoArgentino('Johan')
saludoMexicano('Johan')
```


## Estructuras de datos inmutables

Las estructuras de datos inmutables forman parte de los **principios** de la **Programación Funciona**l y nos permiten **evitar tener efectos colaterales en los datos**. En otras palabras, que hayan modificaciones en las variables sin nuestro consentimiento, produciendo comportamientos inesperados en el programa.

```js
const johan = {
  nombre: 'Johan',
  apellido: 'Mosquera',
  edad: 15
}  

// const cumpleanos = persona => persona.edad++;

const cumpleanosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
})
```

## Cambiando de contexto al llamar a una función (scope)

El contexto (o alcance) de una función es por lo general, **window**. Así que en ciertos casos, cuando intentamos referirnos a this en alguna parte del código, es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.

Existen al menos tres maneras de cambiar el contexto de una función.

- Usando el método **`.bind`**, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.
- Usando el método **`.call`**, ejecutamos inmediatamente la función con el contexto indicado
- Usando el método **`.apply`**, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores


```js
const johan = {
  nombre: 'Johan',
  apellido: 'Mosquera'
}

function saludar(saludo = 'Hola'){
  console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// const saludarAJohan = saludar.bind(johan)

// .bind() devuelve una nueva funcion y no ejecuta función
setTimeout(saludar.bind(johan, 'Buenas, buenas '), 1000)

// .call() y .apply() ejecutan la función en ese momento
saludar.call(johan, 'Hola che')
saludar.apply(johan, ['Primer parámetro como array'])
```


## ¿Cuándo hace falta poner el punto y coma al final de la línea?

El punto y coma es opcional en JavaScript, excepto en algunos casos:

- Cuando usamos varias instrucciones en una mísma línea
- Al comenzar la próxima línea con un array
- Al comenzar la próxima línea con un template string
