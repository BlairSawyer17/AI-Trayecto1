let x = parseInt(prompt("Ingrese un número: "));
let y = parseInt(prompt("Ingrese segundo número: "));
let z = parseInt(prompt("Ingrese tercer número: "));

let menor, medio, mayor;

if (x > y) {
    menor = y;
    mayor = x;
} else {
    menor = x;
    mayor = y;
}

if (z < menor) {
    medio = menor;
    menor = z;
} else if (z > mayor) {
    medio = mayor;
    mayor = z;
} else {
    medio = z;
}

console.log(menor, medio, mayor);