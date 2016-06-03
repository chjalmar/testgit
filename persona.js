function Persona(nombre) {
    this.nombre = nombre;
    this.presentarse = function() { console.log("Hola soy " + this.nombre); }
}

function Empleado(nombre, trabajo) {
    this.nombre = nombre;
    this.trabajo = trabajo;
    this.presentarse = function() { console.log("Hola soy " + this.nombre + " y trabajo en " + this.trabajo); }
}

var jose = new Persona('Jose');
jose.presentarse(); // imprime: Hola soy Jose

var robert = new Empleado('Robert', 'csw');
robert.presentarse(); // imprime: Hola soy Robert y trabajo en csw