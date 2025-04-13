const precios = {
  Parras: {
    autobus: 500,
    uber: 800,
    renta: 1000,
    hotel: 1500,
    hostal: 800,
    cabana: 1000
  },
  Viesca: {
    autobus: 300,
    uber: 500,
    renta: 700,
    hotel: 1000,
    hostal: 600,
    cabana: 800
  },
  Candela: {
    autobus: 400,
    uber: 600,
    renta: 900,
    hotel: 1200,
    hostal: 700,
    cabana: 950
  },
  Guerrero: {
    autobus: 350,
    uber: 550,
    renta: 750,
    hotel: 1100,
    hostal: 650,
    cabana: 900
  }
};

const viajes = [];

export const registrarDestino = (origen, destino, fecha, transporte, alojamiento, personas) => {
  const costoTransporte = precios[destino][transporte] * personas;
  const costoAlojamiento = precios[destino][alojamiento] * personas;
  const total = costoTransporte + costoAlojamiento;

  viajes.push({ origen, destino, fecha, transporte, alojamiento, personas, total });
};

export const mostrarItinerario = () => {
  const contenedor = document.getElementById("itinerario");
  contenedor.innerHTML = "<h2>Itinerario</h2>";

  viajes.forEach((viaje, index) => {
    const div = document.createElement("div");
    div.className = "viaje";
    div.innerHTML = `
      <strong>Fecha:</strong> ${viaje.fecha}<br/>
      <strong>Origen:</strong> ${viaje.origen}<br/>
      <strong>Destino:</strong> ${viaje.destino}<br/>
      <strong>Personas:</strong> ${viaje.personas}<br/>
      <strong>Transporte:</strong> ${viaje.transporte}<br/>
      <strong>Alojamiento:</strong> ${viaje.alojamiento}<br/>
      <strong>Total:</strong> $${viaje.total}<br/>
      <button class="eliminar" data-index="${index}">Eliminar</button>
    `;
    contenedor.appendChild(div);
  });

  if (viajes.length === 0) {
    contenedor.innerHTML += "<p>No hay viajes registrados aún.</p>";
  }
};

export const eliminarViaje = (index) => {
  viajes.splice(index, 1);
};
