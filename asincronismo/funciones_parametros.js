class Persona {

  constructor(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  // En las clases, no es necesario colocar la palabra function
  saludar(func){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    
    // Si la función tiene un valor
    if (func){
      func(this.nombre, this.apellido)
    }
  }

  soyAlto(){
    return this.altura > 1.8;
  }

}

class Desarrollador extends Persona {

  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura);
  }

  saludar(func){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);

    if (func){
      func(this.nombre, this.apellido, true)
    }
  }

}

function responderSaludo(nombre, apellido,  esDev){
  console.log(`\nBuen día ${nombre} ${apellido}`);
  if (esDev){
    console.log(`No sabía que eras desarrollador`);
  }
}

var johan = new Persona('Johan', 'Mosquera', 1.73);
var maria = new Persona('Maria', 'Montes', 1.58);
var pepito = new Desarrollador('Pepito', 'Perez Oso', 1.80);

johan.saludar();
maria.saludar(responderSaludo);
pepito.saludar(responderSaludo);