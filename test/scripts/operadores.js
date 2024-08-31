let edad_operadores = 22;

let edad_operadores_actual = edad_operadores + 6;

console.log(edad_operadores_actual);

// + - * / %

function dividir(num1, num2) {
    return (num1/num2)
}

function multiply(num1, num2) {
    return (num1*num2)
}

function elevar(num1, potencia) {
    return (num1**potencia)
}

function sum(num1, num2) {
    return (num1+num2)
}

function restar(num1, num2) {
    return (num1-num2)
}

function obtenerResiduo(num1, num2) {
    return (num1%num2)
}

console.log("dividir: "+dividir(18,3));
console.log("multiply: "+multiply(3,3));
console.log("sum: "+sum(9,3));
console.log("restar: "+restar(18,3));
console.log("residuo: "+obtenerResiduo(38,20));
console.log("elevado: "+elevar(7,5));

let sobrante = edad_operadores_actual%6;
console.log(sobrante);