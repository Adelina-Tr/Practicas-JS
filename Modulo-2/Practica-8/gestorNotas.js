const { leerNotas, guardarNotas } = require('./utils');

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  let notas = leerNotas();  // Usar la función auxiliar para leer las notas
  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);
  guardarNotas(notas);  // Usar la función auxiliar para guardar las notas
  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  const notas = leerNotas();  // Usar la función auxiliar para leer las notas
  if (notas.length > 0) {
    console.log('Notas guardadas:');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota.titulo}: ${nota.contenido}`);
    });
  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  let notas = leerNotas();  // Usar la función auxiliar para leer las notas
  const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);
  guardarNotas(notasRestantes);  // Usar la función auxiliar para guardar las notas
  console.log(`Nota con título "${titulo}" eliminada.`);
}

// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
eliminarNota('Compras');
listarNotas();
