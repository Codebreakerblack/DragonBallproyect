const API_URL = "https://web.dragonball-api.com/"

const HTMLresponse =  doc.querySelector("#DragonBall")



fetch(`${API_URL}/names`)
    .then(reponse => response.json())
    .then(names => {
        const data = name.map (name => ` <li></li>)
    })