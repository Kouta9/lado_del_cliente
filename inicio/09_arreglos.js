let calificacion = [100,85,45,76];
let arregloDiferentesTipos = ["hola",10,true,[1,2,3],function getNombre(){return "enrique"}];

let arregloNumeros = new Array (5);
let arregloLetras = Array ("A","B","C");

console.log(calificacion);
console.log(arregloDiferentesTipos);
console.log(arregloNumeros);
console.log(arregloLetras);

console.log(arregloDiferentesTipos[4]());//los parentesis es para inicialiar la funcion que está en el arreglo
console.log(arregloDiferentesTipos[3][1])//es para entrar en los arreglos dentro de arreglos
calificacion.push(90);//para agregar a un arreglo un valor
calificacion.unshift(0);//para agregar un elemento al principio
calificacion.pop();//quita la ultima pocicion del arreglo
calificacion.shift();//quita el prier elemento

let elementoEliminadoFinal = calificacion.pop();//guarda el ultimo elemento borrado

console.log(calificacion)//imprime en pantalla

let copiaDelArreglo = calificacion.slice();//copia que no se modifique
let copiaDelArreglo2 = [...calificacion];//copia que no se modifique, en un nuevo arreglo

calificacion.pop()
console.log(calificacion,copiaDelArreglo,copiaDelArreglo2)


console.table(calificacion);//lo pone como tabla con indice y valor
