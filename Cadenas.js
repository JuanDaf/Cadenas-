let Nombre = "Juan David"; 
let Apellido = "Forero";
 
let estudiante = Nombre +" "+ Apellido;

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let numletras = estudiante.length;

let primeraletra = Nombre.charAt();
let primeraletraApe = Apellido.charAt();

let quitarespacios =  estudiante.trim();

let contienenombre = estudiante.includes(Nombre);

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numletras);
console.log(primeraletra);
console.log(primeraletraApe);
console.log(quitarespacios);
console.log(contienenombre)