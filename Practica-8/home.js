
document.addEventListener("DOMContentLoaded", function() {
    mostrarComentarios();
})

function postComment() {
    const commentText = document.getElementById('comment').value;
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const fecha = new Date().toLocaleString()    

    if (commentText.trim() === "") {
        alert("El comentario no puede ir vacio")
        return;
    }

    const newComment = {
        username: user.username,
        name: user.name,
        image: user.image,
        commentText: commentText,
        timestamp: fecha
    }

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);

    localStorage.setItem('comments', JSON.stringify(comments))

    document.getElementById('comment').value = "";

    mostrarComentarios();
}

function mostrarComentarios() {
    const commentSection = document.getElementById('comment-section');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    commentSection.innerHTML = '';

    comments.forEach((comment, index) => {
        const comentarioSection = document.createElement("section");
        comentarioSection.classList.add("comentario")
        comentarioSection.innerHTML = `
            <img src="${comment.image}" class="user-image"> 
            <strong>${comment.name}</strong>  
            <br><p>${comment.timestamp}</p><br> 
            ${comment.commentText}
            ${comment.username === loggedUser.username ? `<button class="eliminar-btn" data-index="${index}" onclick="eliminarComentario(${index})">Eliminar</button>` : ""}
        `;
        commentSection.appendChild(comentarioSection);
    });
}

function eliminarComentario(index) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (comments[index].username !== loggedUser.username) {
        alert("No tienes permiso para eliminar este comentario.");
        return;
    }

    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    mostrarComentarios();
}


