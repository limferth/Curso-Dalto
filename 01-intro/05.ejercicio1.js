//LA HISTORIA DE  COFLA

/*
A) 3 chicos de 23 anios perfectamente normales entran a una heladeria a comprar un helado pero hay un problema
    Los precios no estan a cada lado de cada estante con su respectivo helado.

    Roberto mtiene 1.5Usd
    Pedro Tiene 1.7Usd
    Cofla Tiene 3Usd

    los precios de los helados son los siguientes:
    1. palito de helado agua: 0.6Usd
    2. Palito de Helado de crema: 1Usd
    3. Bombon marca Heladix : 1.6 Usd
    4. Bombon marca heladovich: 1.7 Usd
    5. Bombon marca Helardo: 1.8 Usd
    6. Potecito de helados  con confetis: 2.9 Usd
    7. Pote de 1/4 kg: 2.9 Usd

    CREA SOLUCIONES
    Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que pueden comprar
    Si hay dos o mas con el mismo precio mostrar ambos0
    Cofla quiere saber cual es el vuelto
*/
//solucion

let dineroCofla = prompt("Cuanto dinero tienes Cofla");
let dineroRoberto = prompt("Cuanto dinero tienes Roberto");
let dineroPedro = prompt("Cuanto dinero tienes Pedore");


dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla comprate el helado de agua");
    alert("Cofla y te sobre " + (dineroCofla -0.6));
} else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla comprate el helado de crema");
    alert("Cofla y te sobre " + (dineroCofla -1));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla comprate el helado de heladix");
    alert("Cofla y te sobre " + (dineroCofla -1.6));
} else if (dineroCofla >= 1.7 && dineroCofla <1.8){
    alert("Cofla comprate el helado de heladovich");
    alert("Cofla y te sobre " + (dineroCofla -1.7));
} else if (dineroCofla >= 1.8 && dineroCofla <2.9){
    alert("Cofla comprate el helado de herlardo");
    alert("Cofla y te sobre " + (dineroCofla -1.8));
} else if (dineroCofla >= 2.9) {
    alert("Cofla compra el eleado 1/4kg o el helado con confites");
    alert("Cofla y te sobre " + (dineroCofla -2.9));
} else {
    alert("Cofla lo siento no te alcanza para ningun helado");
}
//para roberto

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto Comprate el helado de agua");
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto Comprate el helado de crema");
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto Comprate el helado de heladix");
} else if (dineroRoberto >= 1.7 && dineroRoberto <1.8){
    alert("Roberto Comprate el helado de heladovich");
} else if (dineroRoberto >= 1.8 && dineroRoberto <2.9){
    alert("Roberto Comprate el helado de herlardo");
} else if (dineroRoberto >= 2.9) {
    alert("Robertocompra el eleado 1/4kg o el helado con confites");
} else {
    alert("Roberto lo siento no te alcanza para ningun helado");
}
// para pedro
if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro comprate el helado de agua");
} else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro comprate el helado de crema");
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro comprate el helado de heladix");
} else if (dineroPedro >= 1.7 && dineroPedro <1.8){
    alert("Pedro comprate el helado de heladovich");
} else if (dineroPedro >= 1.8 && dineroPedro <2.9){
    alert("Pedro comprate el helado de herlardo");
} else if (dineroPedro >= 2.9) {
    alert("PEdro compra el eleado 1/4kg o el helado con confites");
} else {
    alert("PEdro lo siento no te alcanza para ningun helado");
}
