var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2040,
    matricula: "5D61CV0",
    detalleAuto: function(){
        console.log(`Auto: ${this.modelo}, ${this.marca}`)
    }

}

console.log(miAuto);
miAuto.detalleAuto()