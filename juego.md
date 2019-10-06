# Juego de Memoria

## Generando una secuencia de números

Para generar la secuencia del juego usaremos un array con números aleatorios, que representarán el color del botón que se iluminará cada vez. Usamos **new Array()** para crear el arreglo de manera dinámica, y llamamos al método **`fill`** para rellenar ese array con ceros y poder luego iterar sobre éste con **`map()`**



## Iluminando la secuencia de colores

En esta clase se observa la diferencia entre el uso de let y var para la declaración de variables y cómo esta diferencia afecta el alcance de la variable dentro de un ciclo for. Se recomienda siempre el uso de let cuando se trata de estructuras for, ya que al usar var, **_el valor de dicha variable se va a remplazar cada vez con la última asignación que se haga, mientras que con let, conservará su valor dentro de cada iteración_**.

**Siempre que sea posible debemos usar const sobre let, y let sobre var.**


## Obteniendo el input del usuario

Para obtener el input del usuario agregamos un manejador para el evento click del mouse usando addEventListener para cada uno de los colores del juego. Utilizando la propiedad target devuelta por el evento click podemos identificar cuál es el botón que ha sido presionado.

Si no colocamos **`.bind(this)`** el evento tomará el contexto de this como el botón que estamos aplicandole en **_addEventListener_**


## Agregando la verificación del color elegido

Para agregar atributos al objeto principal en el que está nuestro código, basta con usar this, haciendo referencia al contexto de la clase, y agregar los atributos con un punto: this.atributo = valor

La verificación del color elegido la haremos creando y removiendo los eventos del click al pasar el juego a cada nuevo nivel.


## Agregando los estados finales del juego

Incluiremos una librería de mensajes con estilos mucho más agradables que el mensaje básico de javascript para mostrar los estados finales del juego al usuario.