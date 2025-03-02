// Arreglo para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro al arreglo
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`El libro "${titulo}" ha sido añadido a la lista de libros leídos.`);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(`- ${librosLeidos[i]}`);
        }
    }
}

// Ejemplos de uso
agregarLibro("Cien Años de Soledad");
agregarLibro("1984");
agregarLibro("El Quijote");

mostrarLibrosLeidos();
