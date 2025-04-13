// Arreglo vacío para la lista de compras
let listaDeCompras = [];

// Función para agregar un producto a la lista
const agregarProducto = (producto) => {
    // Verificar si el producto ya está en la lista
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`${producto} agregado a la lista.`);
    } else {
        console.log(`${producto} ya está en la lista.`);
    }
};

// Función para eliminar un producto de la lista
const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`${producto} eliminado de la lista.`);
    } else {
        console.log(`${producto} no se encuentra en la lista.`);
    }
};

// Función para mostrar todos los productos de la lista
const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía.");
    } else {
        console.log("Lista de compras:");
        listaDeCompras.forEach(producto => {
            console.log(`- ${producto}`);
        });
    }
};

// Ejemplos de uso
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Manzanas");
agregarProducto("Leche");  // Intentando agregar un duplicado
mostrarLista();
eliminarProducto("Pan");
mostrarLista();
eliminarProducto("Arroz");  // Intentando eliminar un producto no existente
