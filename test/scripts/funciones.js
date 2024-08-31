console.log("Esto es el archivo de funciones");

function sumar(num1, num2){
    return num1 + num2;
}

function edadEn5(edad){
    return edad+5;
}

function formarSaludo(nombre, genero, edad = ''){
    let frase = edad != '' ? " Tu edad en 5 años será: " + edadEn5(edad) : '';
    let word = genero == 'M' ? 'o' : 'a';
    return "Hola, " + nombre + ". Bienvenid"+word+"."+frase;
}

let resultado = sumar(1, 5);
console.log("Resultado de suma: "+resultado);

let saludo = formarSaludo('Jacob', 'M', 28);
let saludo2 = formarSaludo('Wendy', 'F');
console.log(saludo);
console.log(saludo2);