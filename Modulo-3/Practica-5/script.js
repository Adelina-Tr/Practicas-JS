document.getElementById('registroEvento').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
  
    // Validaciones adicionales
    if (nombre.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres.');
      return;
    }
  
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      alert('Ingresa un correo electrónico válido.');
      return;
    }
  
    const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
      alert('El teléfono debe tener 10 dígitos.');
      return;
    }
  
    if (intereses.length === 0) {
      alert('Selecciona al menos un interés.');
      return;
    }
  
    const fechaSeleccionada = new Date(fecha);
    const hoy = new Date();
    hoy.setHours(0,0,0,0);
    if (fechaSeleccionada < hoy) {
      alert('La fecha debe ser igual o posterior a hoy.');
      return;
    }
  
    alert('Registro exitoso. ¡Gracias por registrarte!');
  });
  