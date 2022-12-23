var estudiantes = ["yugio","goku","laopta","imagine","rulo"]

function saludarEstudiantes(estudiante){
    console.log(`Hola bienvenido ${estudiante}`);
}

for (let index = 0; index < estudiantes.length; index++) {
   var estudiante = estudiantes[index]
   saludarEstudiantes(estudiante)
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}