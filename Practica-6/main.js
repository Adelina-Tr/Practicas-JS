document.getElementById('comentario-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const comentarioTexto = document.getElementById('comentario').value;
    const fecha = new Date().toLocaleString();

    if (comentarioTexto.trim() !== "") {
        const comentarioDiv = document.createElement('div');
        comentarioDiv.classList.add('comentario');

        const textoDiv = document.createElement('div');
        textoDiv.textContent = comentarioTexto;
        
        const fechaDiv = document.createElement('div');
        fechaDiv.textContent = `Publicado el: ${fecha}`;
      
        comentarioDiv.appendChild(textoDiv);
        comentarioDiv.appendChild(fechaDiv);

        document.getElementById('comentarios').appendChild(comentarioDiv);

        document.getElementById('comentario').value = "";
    }
});
