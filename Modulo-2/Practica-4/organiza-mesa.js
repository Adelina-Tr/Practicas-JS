const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        const inicialInicio = arr[inicio][0].toLowerCase();
        const inicialSiguiente = arr[siguiente][0].toLowerCase();

        if (inicialInicio === inicialSiguiente) {
            return [arr[inicio], arr[siguiente]];
        }

        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado esperado: ["Carlos", "Cecilia"]
