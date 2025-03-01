// Arreglo con varios tipos de frutas
let frutas = ["manzana", "banana", "manzana", "pera", "banana", "manzana", "pera", "uva", "uva"];

// Objeto que almacena la cantidad de cada tipo de fruta
let conteoFrutas = {};

// Ciclo for que recorre el arreglo y cuenta las frutas
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}
