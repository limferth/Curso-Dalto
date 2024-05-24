/*
FUNCIONES
    -DEFINCION Y USOS = tiene dos partes DECLARACION E INILIZIACION
    -Formas de crear fucniones Y como llamarlos
    -RETURN
    -Parametros
    -Scope
    -Fucniones Flecha
*/
// function saludar() {
//     alert("hola");
//     return "la fucnion funciona con exito";
// }
// let saludo = saludar();
// console.log(saludo);


function suma(num1, num2) {
    let respuesta = num1 - num2;
    return respuesta;
}

let res = suma(2024, 1999);
console.log(res); // repsarar 

// ejemplo 2 CON CONSOLE.LOG O DOCUMWENT.WRITE
function saludar(nombre) {
    let frase = `hola como estas ${nombre} que pedo contigo`;
    console.log(frase);
}

saludar("limber")
// SEGUNDA MANERA DE HACER LA FUCNION CON  RETURN
function saludito(nombre) {
    let frases = `hola como estas cjdo ${nombre} que pedo contigo`;
    return frases;
}
let saludoCompleto = saludito("limberfernando")

console.log(saludoCompleto)

// funciones TIPO VARIABLE
const saludo = function() {
    console.log("hiloa");
}

// funciones FLECHA
const saludar = namess => document.write(frase);