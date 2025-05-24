// Importar el array de planetas desde planetas.js
const planetas = require('./planetas');

// Mostrar la información de cada planeta
planetas.forEach(planeta => {
  console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log('---------------------------');
});
