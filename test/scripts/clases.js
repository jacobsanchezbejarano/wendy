// Atributos o propiedades de una clase/objeto
class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    
    saludar(){
        alert("Hola");
    }

    caminar(){
        alert("Estoy caminando");
    }
}

class Vehiculo {

}

// Instanciar
// Instancia | Objeto
//camelCase | separar_con_guion_bajo // Para las variables
let persona = new Persona('Jacob', 'Sanchez Bejarano', 28);

console.log("Nombre: " + persona.nombre);
console.log("Apellido: " + persona.apellido);
console.log("Edad: " + persona.edad);

persona.direccion = "Valle Sanchez";
persona.comida_favorita = "Salpicón";

console.log("Dirección: " + persona.direccion);

console.log(persona);


// Ejecutar los métodos de la clase/objeto/instancia
// persona.saludar();
// persona.caminar();
