import { registrarDestino, mostrarItinerario } from './logica_viajes.js';

document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  const origen = "Cuatro Ciénegas"; // Fijo
  const destino = document.getElementById("destino").value;
  const fecha = document.getElementById("fecha").value;
  const transporte = document.getElementById("transporte").value;
  const alojamiento = document.getElementById("alojamiento").value;
  const personas = parseInt(document.getElementById("personas").value);

  registrarDestino(origen, destino, fecha, transporte, alojamiento, personas);
  mostrarItinerario();

  e.target.reset();
});

// Manejar la eliminación de viajes
document.getElementById("itinerario").addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    const index = parseInt(e.target.dataset.index);
    import('./logica_viajes.js').then(modulo => {
      modulo.eliminarViaje(index);
      modulo.mostrarItinerario();
    });
  }
});