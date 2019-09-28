# Estructuras de Control y Funciones

## Condicionales

Los condicionales nos **_permiten decidir si un código se ejecuta o no_**. También introducimos un nuevo tipo de **datos primitivos**: `el booleano`, que determina si un valor es falso o verdadero. Mediante un condicional (if) decidiremos si se ejecuta una parte de nuestro código cuando se cumpla o no cierta condición.

Javascript en CaseSentitive, es decir reconoce mayúsculas y minúsculas.

## Funciones que retornan valores

En esta clase seguiremos trabajando con condicionales para desglosar las funciones en funciones más pequeñas que retornen un valor.

Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad. Para ello utilizamos los símbolos >=.

**Return** _detiene la ejecución de una función_ y devuelve el valor de esa función.

Las variables definidas con const se comportan como las variables, excepto que no pueden ser reasignadas. Las **constantes** pueden ser declaradas en mayúsculas o minúsculas. Pero por **convención**, para distinguirlas del resto de variables, se escribe todo en **mayusculas**.


## Arrow functions

Las Arrow Functions, es una forma de escribir funciones. Permiten una nomenclatura más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.

```js
const mayorEdad = ({edad}) =>   edad>=MAYORIA_DE_EDAD;

console.log(mayorEdad(johan));
```


## Estructuras repetitivas

### `for`

El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
Ej. **`for( ){ }`**. Dentro de los paréntesis irán las condiciones para ejecutar el bucle, y dentro las llaves irán las instrucciones que se deben repetir.

```js
for (let i = 0; i<=10; i++){
  console.log(`Número ${1}`);
}
```

### `while`

While se ejecuta únicamente mientras la condición que se está evaluando es verdadera.

En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos. En caso de que quieras verificar tu código, debes utilizar un debugger. El código se detiene cada vez que lee esta palabra.

```js
while (condicion){
  // Bloque de código
}
```

### `do-while`

A diferencia de la instrucción while, un bucle do…while se ejecuta una vez antes de que se evalúe la expresión condicional.

```js
do {
  // Bloque de código
  // Se ejecuta una vez antes de evaluar la expresión
} while (condicion)
```

### `switch`

Switch se utiliza para realizar diferentes acciones basadas en múltiples condiciones.

- **prompt** muestra un cuadro de mensaje que le pide al usuario que ingrese algúna información.

- **break** sirve para saltar una iteración