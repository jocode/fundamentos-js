// En JS más que clases se conocen como prototipos
function Persona(nombre, apellido, altura){
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() {
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
juan.saludar();