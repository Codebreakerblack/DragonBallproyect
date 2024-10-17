const requestURL = 'https://dragonball-api.com/api/characters?limit=58';
const requestURL2 = 'https://dragonball-api.com/api/planets?limit=20';

async function fetchDragonBallJson() {
        const response = await fetch(requestURL);
        const dragonBall = await response.json();
        return dragonBall;
}

    fetchDragonBallJson().then(data => {
        if (data.items && data.items.length > 0) {
            for (let i = 0; i < data.items.length; i++) {

            let ki  = data.items[i].ki;
            let name  = data.items[i].name;
            let maxKi  = data.items[i].maxKi;
            let race  = data.items[i].race;
            let gender  = data.items[i].gender;
            let affiliation  = data.items[i].affiliation;
            let image  = data.items[i].image;

        dragonballSection.innerHTML += `
            
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

            
}}});
