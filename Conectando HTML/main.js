const h1 = document.querySelector('h1')
const input = document.querySelector('#calculo')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const form = document.querySelector('#form')
const result = document.querySelector('#result')



h1.innerHTML = 'Que mira, bobo? <br> Anda pa lla bobo'

 form.addEventListener('submit',calcular)

 function calcular(event){
    console.log({event})
    event.preventDefault()
     const suma = parseFloat(input.value) + parseFloat(input2.value)
     result.innerHTML =  "Resultado: " + parseFloat(suma)
 }







