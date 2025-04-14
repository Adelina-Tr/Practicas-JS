const fs = require('fs');
const filePath = './notas.json';

/**
 * Lee el archivo de notas y devuelve su contenido.
 * @returns {Array} - Las notas almacenadas.
 */
function leerNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }
  return [];
}

/**
 * Escribe las notas en el archivo JSON.
 * @param {Array} notas - El array de notas a guardar.
 */
function guardarNotas(notas) {
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
}

module.exports = { leerNotas, guardarNotas };
