function greet(){
    console.log("Hello");
}
function logGreeting(fn){
    fn();
}
let greetMe = function (){
    console.log("Hello from the function expression");
}
let saludo = (nombre,tratamiento) =>{
    console.log('hola' + ' ' + tratamiento + ' ' + nombre)
}
let cuadrado = numero =>{
    return numero + numero;
}
let saludo2 = (nombre,tratamiento) => console.log('hola' + ' ' + tratamiento + ' ' + nombre);

let cuadrado2 = numero => numero * numero;

saludo('Miguel', 'Sr.');
greetMe();
logGreeting(greet);
console.log(cuadrado(7));
saludo2('Miguel', 'Sr.');
console.log(cuadrado2(7));


