var estudiantes = ["luis","Nava","Arzate"]

function solution(estudiantes, deathCount, nuevo) {
    var iteracion
    if(deathCount == 0){
        estudiantes.push(nuevo)
    }else if(deathCount > 0){
        for(var i = 0; i<=deathCount;i++){
            estudiantes.pop()
        }
        estudiantes.push(nuevo)
    }
}

function imprimirEstudiantes(estudiantes){
    for(var estudiante of estudiantes){
        console.log(estudiante)
    }
}

solution(estudiantes,2,"Pancho")
imprimirEstudiantes(estudiantes)