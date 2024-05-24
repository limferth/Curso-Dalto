/* arrays 
    - DEFINCION Y USOS =  
    - FORMAS DE CREAR UN ARRAY = 

*/ 
frutas = ["banana", "manzana", "Mangostino", "pera"];

console.log(frutas[1]);

// ARRAYS ASOCIATIVOS es cuando le ponemos nombre a los parametros.
let pc = {
   nombre: "daltos pc",
   procesador: "interl Core 7",
   ram: "8GB",
   espacio: "120GB"
}

let pc2 = ["Dalto2", "Amd", "cori17", "1tb"];


console.log(pc);
console.log(pc2);

let nombre = pc ["nombre"];
let procesador = pc ["procesador"];
let ram = pc ["ram"];
let espacio = pc ["espacio"];

let frase = `el nombre de mi pc es : ${nombre}</br>
            el procesador es: ${procesador} </br>
            la memoria ram es : ${ram} </br>
            el espacio en disco: ${espacio};`

console.log(frase);
