var frutas = ["manzana","platano","cereza","fresa"]

console.log(frutas)
console.log(frutas[2])

var masFrutas = frutas.push("Pepinos")
console.log(frutas)
var ultimaFruta = frutas.pop()
//saco a la ultima fruta del arreglo
console.log(ultimaFruta)
ultimaFruta = frutas.pop()
//saco a la ultima fruta del arreglo
console.log(ultimaFruta)
var nuevaLong = frutas.unshift("Bluebarry")
//coloca hasta el frente lo que le asignemos
console.log(frutas)
var borrarFruta = frutas.shift()
//Nos borra la primera fruta
console.log(frutas)
var posicion = frutas.indexOf("cereza")
console.log(posicion)


