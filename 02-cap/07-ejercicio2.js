/*
B) Cofla vuelve de la co0misaria exausto y por lo cansado que estaba se fue a dormir
al otro dia comienxan las clases del ciclo basico de la universidad (porque Cofla quiereser programado
y se inscribio en la facultad de ingenieriia para estudiar ingeniria de software)
En su curso en total son 19 alumnos, pero surgio un problema que dificulto a la facultad.
    Se rompio el sistema de registro de asistencias y durante los proximos 30 dias no se podra hacer 
    registro de datos de ningun tipo por ende las clases nompodran comenzar hasta que se 
    solucione este problema

    -Creaeun mini-sistema que nos permita registrar a los alumnos que estan 
    presentes (p) y ausente (A) en clase
    -pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro  total de presentes y ausentes)
    - se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que esta reprobado
*/
let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales =[];
for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
    
};

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for(alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    _______________Asistencias: ${alumnosTotales[alumno][1]} </br>
    ______________Ausencia: ${alumnosTotales[alumno][1]} </br> 
    `;
    if(30 - alumnosTotales[alumno][1] > 18) {
        resultado += "<b style = color:red> REPROBADO POR INASISTENCIA </b> </br>";
    }else {
        resultado += "<br></br>";
    }
    document.write(resultado)
}
