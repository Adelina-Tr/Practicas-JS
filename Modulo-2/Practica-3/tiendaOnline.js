// Arreglo de productos
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// Usamos filter() para obtener productos que cuesten menos de $100
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a $100:", productosBaratos);

// Usamos sort() para ordenarlos alfabéticamente por nombre
const productosOrdenados = [...productosBaratos].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
);
console.log("Productos ordenados alfabéticamente:", productosOrdenados);

// Usamos map() para generar un nuevo arreglo con solo los nombres
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de productos filtrados y ordenados:", nombresProductos);

// Métodos adicionales

// Usamos reduce() para sumar los precios de los productos filtrados
const totalBaratos = productosBaratos.reduce((acc, producto) => acc + producto.precio, 0);
console.log("Suma total de productos < $100:", totalBaratos);

// Usamos some() para verificar si hay al menos un producto de Electrónica entre los baratos
const hayElectronica = productosBaratos.some(producto => producto.categoria === "Electrónica");
console.log("¿Hay productos electrónicos entre los baratos?:", hayElectronica);

// Usamos every() para verificar si todos los productos baratos cuestan menos de $100
const todosBaratos = productosBaratos.every(producto => producto.precio < 100);
console.log("¿Todos los productos baratos cuestan menos de $100?:", todosBaratos);

// Usamos includes() con un arreglo de nombres para ver si existe "Libro"
console.log("¿Está 'Libro' en la lista final?", nombresProductos.includes("Libro"));
