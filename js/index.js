const requestURL = 'https://dragonball-api.com/api/characters?limit=58';

async function fetchDragonBallJson(){
    const response = await fetch(requestURL);
    const dragonBall = await response.json();
    return dragonBall;
}

console.log(dragonBall(id))
