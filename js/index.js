const requestURL = 'https://dragonball-api.com/api/characters?limit=58';
const requestURL2 = 'https://dragonball-api.com/api/planets?limit=20';

async function fetchDragonBallJson() {
    try {
        const response = await fetch(requestURL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const dragonBall = await response.json();
        return dragonBall;
    } catch (error) {
        console.error('Error fetching Dragon Ball data:', error);
    }
}

fetchDragonBallJson().then(data => {
    if (data?.items?.length > 0) {
        let html = '';
        data.items.forEach(item => {
            const { ki, name, maxKi, race, gender, affiliation, image } = item;
            html += `
                <div class="card" style="width: 36rem;">
                    <img src="${image}" class="card-img-top" alt="...">
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
        document.getElementById('dragonballSection').innerHTML = html;
    }
});

async function fetchPlanetsJson() {
    try {
        const response = await fetch(requestURL2);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const planets = await response.json();
        return planets;
    } catch (error) {
        console.error('Error fetching Planets data:', error);
    }
}

document.getElementById('fetchplanesJson').addEventListener('click', () => {
    fetchPlanetsJson().then(data => {
        if (data?.items?.length > 0) {
            let html = '';
            data.items.forEach(item => {
                const { image, name, description } = item;
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
            document.getElementById('planetSection').innerHTML = html;
        }
    });
});