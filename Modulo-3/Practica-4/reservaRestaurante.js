// Simulando una base de datos de mesas
let mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`Hay suficientes mesas disponibles. Reservando ${mesasSolicitadas} mesa(s)...`);
      } else {
        reject(`No hay suficientes mesas disponibles. Solo quedan ${mesasDisponibles} mesa(s).`);
      }
    }, 2000);
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.3; // 70% de probabilidad de éxito
      if (exito) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
      } else {
        reject("Error al enviar el correo de confirmación.");
      }
    }, 1500);
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const mensajeDisponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(mensajeDisponibilidad);
    
    // Descontamos las mesas solo si hay disponibilidad
    mesasDisponibles -= mesasSolicitadas;

    console.log("Enviando confirmación de reserva...");
    const mensajeCorreo = await enviarConfirmacionReserva(nombreCliente);
    console.log(mensajeCorreo);
    
  } catch (error) {
    console.log("Error:", error);
  }
}

// Llamadas de prueba
hacerReserva("Juan Pérez", 3);
hacerReserva("Ana Gómez", 2);
hacerReserva("Luis Martínez", 1); // Este puede fallar si ya no quedan mesas
