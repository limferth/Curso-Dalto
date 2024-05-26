/*
Un joven muy afortunado logro ganar el primer premio de la loteria .. exacto estamos hablando del podre al 
que Cofla le dio una mano, este pobre decide hacer una fiesta para hacer una 
fiesta para fertejar que salio de la pobreza con el millonario
compro una maquina que solo deja pasar a los mayores de edad entre otras cosas...
    -Dejar pasar solo a los mayores de edad
    - la mprimera persona que entre despues de las 2 AM, no paga
*/ 
let free = false;
function validarCliente(){
    let edad = prompt("cual es tu edad");
    if(edad >= 18) {
        let hora = prompt("que horas son"); 
        if(hora >= 2 && hora < 7 && free == false) {
            alert("entras gratis");
            free =true;
        }else {
        alert("podes psar, pero tenes que pagar")
        }
    } else {
        alert("mmira sos menor, no quiero ir a la carcel");
    }
}

validarCliente(23);
validarCliente(7);
validarCliente(12);
validarCliente(2);
