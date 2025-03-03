//Users
const users = [
    {name: "Ivan Garcia", username: "ivanfou", password: "1234", image: "https://images.pexels.com/photos/6408361/pexels-photo-6408361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Saul Arguello", username: "saulau", password: "abcd", image: "https://images.pexels.com/photos/6630816/pexels-photo-6630816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Ian Rios", username: "ianrios", password: "asdfg", image: "https://images.pexels.com/photos/6414910/pexels-photo-6414910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
]

function logIn() {
    const usernamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage)

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(userFind));
        window.location.href = "home.html";
    }else{
        error.textContent = "Usuario o contraseña incorrecta"
    }
}