// for in y for of
let animales = ["pato", "gato", "perro", "loro"];
// FOR in nos muestra el indice numerico en que numero de pocison se encuentra [la pocision del valor]
for(let animal in animales){
    console.log(animal)
}
// for of nos muestra el valor de la pocision [el valor de la pocision]

for (let animal of animales) {
    console.log(animal)
}


// label

let array1 = ["maria", "jesefa", "Roberta"];
let array2 = ["pedro", "marcelo", array1, "limberin"];
forRancio:
for (let array in array2) {
    if(array == 2) {
        for(let array of array1) {
            continue forRancio;
            console.log(array + "</br>");
            
        }
    } else {
        console.log(array2[array] + "</br>");
    }
}