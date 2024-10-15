const requestURL = 'https://dragonball-api.com/api/characters?limit=58';

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
            
            <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${race} - ${gender}</p>
                <p>Base KI:</p>
                <p class="card-text">${ki}</p>
                <p>Total KI:</p>
                <p class="card-text">${maxKi}</p>
                <p>Affiliation:</p>
                <p class="card-text">${affiliation}</p>

            </div>
            
            </div>

            `;

}}});