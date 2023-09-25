function despedir(nombre) {
    return `adios ${nombre}` //las comillas es para poner cosas que no se puedan 
}
console.log(despedir("enrique normal"))

let funcionAlmacenada = function saludar (nombre) {return `hola ${nombre}`}; //funcion dentro de una variable
console.log(funcionAlmacenada("enrique almacenado"));

let funcionAnonimaAlmacenada = function (nombre) {return `hola ${nombre}`}; //funcion anonima
console.log(funcionAnonimaAlmacenada("enrique anonimo"));

console.log(function () {return "en ejecucion"}()); //funcion sin ocupar espacio de almacenamiento


function optenerPotencia (base,exponente = 2) { //por si no dan el valor de exponente ya se le asignó
    return base**exponente
}
console.log(optenerPotencia(2,2));


//funcion flecha
let funcionFlecha = (nombre)=>{return `hola ${nombre}`}//se le puede quitar el los parentesis y el return si solo retorna una sola linea
console.log(funcionFlecha("kouta"));




const obtenerNombre = nombre => nombre; //flecha minimalista

const saludar = (nombre) => {
    return `hola ${nombre}`
}

console.log(saludar(obtenerNombre("kouta al cuadrado"))); //flecha dentro de flecha, de adentro hacia afuera

calificaciones=[100,12,13,14,15,16]

//calificaciones.forEach(valor,index,arr) => {
//    console.log("valor",valor,"index",index,"arr",arr)       no funcionó
//}



//filter
console.log(calificaciones.filter((calificaciones)=>calificaciones <80))