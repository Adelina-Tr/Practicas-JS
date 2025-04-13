//Users
const users = [
    {name: "Ade Trejo", username: "adelinat", password: "1234", image: "https://images.pexels.com/photos/19435364/pexels-photo-19435364/free-photo-of-a-red-cat-with-a-collar-on-looking-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {name: "Mario Ruiz", username: "maruz", password: "abcd", image: "https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {name: "Ana Lopez", username: "anitalz", password: "asdfg", image: "https://images.pexels.com/photos/6414910/pexels-photo-6414910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
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