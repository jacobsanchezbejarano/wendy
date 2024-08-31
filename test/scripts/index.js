let edad = 23; // INT
let nombre = "Jacob"; // STRING
let peso = 75.5; // FLOAT
let tiene_seguro = true; // BOOLEAN

let datos = [
    edad, nombre, peso
]; // ARRAY

//[].forEach
let x = 0;
if(datos.length > 5){
    datos.forEach((item)=>{
        console.log(item);
    });
}else{
    // console.log("Hay menos de 5 datos en el array");
}

let n = 4;
for(let i=0; i<n; i++) {
    // console.log(i);
}

let m = 10;
while(m < 15){
    // console.log(m);
    m++;
}

// <= >= == === 

// && || !

let tiene_seguro2 = false;

edad = 18;

if(!tiene_seguro2 && edad >= 18){
    console.log("Contrata un seguro");
}else if(edad < 18){
    console.log("Es menor de edad")
}else{
    console.log("Tiene seguro");
}

let peso2 = 75;
let estatura = 1.78;

if((true) || (false)){
    true
}else{
    false
}

if(peso > 80 || (estatura > 1.75 && otro > 2)){
    console.log("verdadero");
}
else{
    console.log("falso");
}