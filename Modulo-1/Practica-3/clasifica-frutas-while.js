// Arreglo con varios tipos de frutas
let frutas = ["manzana", "banana", "manzana", "pera", "banana", "manzana", "pera", "uva", "uva"];

// Objeto que almacena la cantidad de cada tipo de fruta
let conteoFrutas = {};

// Ciclo while que recorre el arreglo y cuenta las frutas
let i = 0;
while (i < frutas.length) {
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
    i++;
}

// Imprime conteo de cada tipo de fruta
for (let tipo in conteoFrutas) {
    console.log(`${tipo}: ${conteoFrutas[tipo]}`);
}
