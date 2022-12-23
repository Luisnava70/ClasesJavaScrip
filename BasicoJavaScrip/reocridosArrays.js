//recorridos de un array
var articulos = [
    {nombre:"Bici",costo:3000},
    {nombre:"Tv",costo:2500},
    {nombre:"Libro",costo:300},
    {nombre:"Iphone 14",costo:30500},
    {nombre:"LapTop",costo:40000},
    {nombre:"Teclado",costo:500},
    {nombre:"Audifonos",costo:1700}
]

var articulosFiltrado = articulos.filter(function(articulo){
    return articulo.costo <= 2000
})

console.log(articulosFiltrado)

var mapArticulos = articulos.map(function(articulo){
    return articulo.nombre + " " + articulo.costo
})

mapArticulos

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "LapTop"
})

encuentraArticulo


articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo > 500
})

console.log(articulosBaratos)