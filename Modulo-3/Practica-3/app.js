const API_URL = 'https://rickandmortyapi.com/api/character';
const dataContainer = document.getElementById('data-container');
const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');

function renderCharacters(characters) {
  dataContainer.innerHTML = '';
  characters.forEach(character => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}" width="150"/>
    `;
    dataContainer.appendChild(div);
  });
}

function fetchCharacters() {
  console.log('Botón Fetch presionado');
  fetch(API_URL)
    .then(response => {
      if (!response.ok) throw new Error('Error en la solicitud con Fetch');
      return response.json();
    })
    .then(data => renderCharacters(data.results))
    .catch(error => {
      dataContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}

function axiosCharacters() {
  console.log('Botón Axios presionado');
  axios.get(API_URL)
    .then(response => renderCharacters(response.data.results))
    .catch(error => {
      dataContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}

fetchBtn.addEventListener('click', fetchCharacters);
axiosBtn.addEventListener('click', axiosCharacters);
