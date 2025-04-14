function findMax(arr) {
    // Caso base: si el arreglo tiene solo un elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir: calcular el punto medio y dividir en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Conquistar: encontrar el máximo en ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar: retornar el mayor de los dos
    return leftMax > rightMax ? leftMax : rightMax;
}

// Ejemplo de uso
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10
