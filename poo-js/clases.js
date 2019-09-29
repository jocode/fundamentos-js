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

var johan = new Persona('Johan', 'Mosquera', 1.73);
johan.saludar();
console.log(johan.soyAlto());

var juan = new Desarrollador('Juan', 'Perez', 1.89);

