const requestURLCharacters = 'https://dragonball-api.com/api/characters?limit=58';
const requestURLPlanets = 'https://dragonball-api.com/api/planets?limit=20';

async function fetchDragonBallJson() {
    try {
        const response = await fetch(requestURLCharacters);
        if (!response.ok) throw new Error(`Error al cargar personajes: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function fetchPlanetsJson() {
    try {
        const response = await fetch(requestURLPlanets);
        if (!response.ok) throw new Error(`Error al cargar planetas: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

function displayCharacters(data) {
    const section = document.getElementById('dragonballSection');
    let html = '';
    data.items.forEach(item => {
        const { name, ki, maxKi, race, gender, affiliation, image } = item;
        html += `
            <div class="card" style="width: 36rem;">
                <img src="${image}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <p class="card-title">${name}</p>
                    <p class="card-text">${race} - ${gender}</p>
                    <p class="card-text2">Base KI:</p>
                    <p class="card-text">${ki}</p>
                    <p class="card-text2">Total KI:</p>
                    <p class="card-text">${maxKi}</p>
                    <p class="card-text2">Affiliation:</p>
                    <p class="card-text">${affiliation}</p>
                </div>
            </div>
        `;
    });
    section.innerHTML = html;
}

function displayPlanets(data) {
    const section = document.getElementById('planetSection');
    let html = '';
    data.items.forEach(item => {
        const { name, description, image } = item;
        html += `
            <div class="card" style="width: 18rem;">
                <img src="${image}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description}</p>
                </div>
            </div>
        `;
    });
    section.innerHTML = html;
}

if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    fetchDragonBallJson().then(data => {
        if (data?.items?.length > 0) {
            displayCharacters(data);
        }
    });
} else if (window.location.pathname.includes('planets.html')) {
    fetchPlanetsJson().then(data => {
        if (data?.items?.length > 0) {
            displayPlanets(data);
        }
    });
}
