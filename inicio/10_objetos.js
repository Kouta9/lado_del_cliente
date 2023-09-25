const persona = {
    nombre:"enrique ontiveros",
    edad:22,
    sexo: "h",
    mentalidad:"estable",
    estado:true,
    telefono:[5543911246,5523212188],
    saludar:function saludar () {return "hola"}
}

console.log(persona.edad);//llamar al objeto con punto y su atrivuto
console.log(persona.telefono[0]);
console.log(persona.saludar());

persona.apellidos = "ontiveros";//agregar un atributo a un objeto
console.log(persona.apellidos);

delete persona.estado//borrar un atributo de un objeto
console.log(persona);