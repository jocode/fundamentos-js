// Funcion Herencia
function heredaDe(prototipoHijo, prototipoPadre){
  var fn = function(){}; // noop
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn;
  prototipoHijo.prototype.constructor = prototipoHijo;
}

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

function Desarrollador(nombre, apellido){
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarrollador, Persona );

Desarrollador.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}


// new Crea nuevos objeto dado un prototipo
var johan = new Persona('Johan', 'Mosquera', 1.75);
var juan = new Desarrollador('Juan', 'Mosquera', 1.7);
juan.saludar();
