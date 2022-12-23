let name
let lastName
let completeName = name + lastName
let nickName

function miPresentacion(name,lastName, nickName){
    completeName = name + " " + lastName
    return "Mi nombre es: " + completeName +", Prefiero que me digan " + nickName + "."
}

console.log(miPresentacion("Luis","Nava","Wicho"))