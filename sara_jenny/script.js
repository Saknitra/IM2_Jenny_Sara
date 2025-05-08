console.log("hi Javascript!")

/*API Abrufen
const container = document.querySelector("#spell-container");

const API_URL = 'https://hp-api.onrender.com/api/spells';

async function fetchData(URL) {
    try {
        const response = await fetch(URL);
        return await response.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

const myData = await fetchData(API_URL);
console.log(myData[0].description);

function showData() {
    mySpellData.forEach(element => {
        let card = document.createElement("article"); //createElement tut ein Element dem DOM hinzufügen//
        card.classList.add("card");
        card.innerHTML = `
        <h2>${element.name}</h2>
        <p>${element.description}</p>
        `;
        container.appendChild(card); //mit appendChild nimmt man den Article und zeigt ihn auf der Website an//
    });
}

showData ();
*/

const buttonContainer = document.querySelector("#ButtonContainer");
buttonContainer.innerHTML = "";

//Startseite Fadein Header und Container (Article)//
window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("header").classList.add("fade");
    document.querySelector(".container").classList.add("fade");   
});

//API Abrufen//
const API_URL =  'https://hp-api.onrender.com/api/spells';

async function fetchData(URL) {
    try {
        const response = await fetch(URL);
        return await response.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

//API anzeigen//
function showAPI () {
    let APIButton = document.createElement("button");
    APIButton.id = "APIButton";
    APIButton.classList.add("button");

    let buttonText = document.createElement("span");
    buttonText.innerText = "Get a random spell!";   
    buttonText.classList.add("TextInButton");
    APIButton.appendChild(buttonText);

    buttonContainer.appendChild(APIButton);
    APIButton.addEventListener("click", async () => {
        
        const TextAusblenden = document.getElementById("TextAnfangFull");
        TextAusblenden.style.display = "none";
        
        const SpellData = await fetchData(API_URL);
        let count = SpellData.length;
        let randomIndex = Math.floor(Math.random() * count);

        const spellOutput = document.getElementById("spellOutput");

        if (SpellData[randomIndex].name && SpellData[randomIndex].description) {
            spellOutput.innerHTML = `
                <h2>Your randomly chosen spell:</h2>
                <div id = cardForSpells>
                    <div id = TextinCard>
                        <div id ="SpellName">
                            <h2 class = "Black">Name:</h2>
                            <h3 class = "Black">${SpellData[randomIndex].name}</h3>
                        </div>
                        <div id ="SpellDescription">
                            <h2 class = "Black">Description:</h2>
                            <h3 class = "Black">${SpellData[randomIndex].description}</h3>
                        </div>
                    </div>    
                </div>
                ` ;
        } else {
            spellOutput.innerText = "No data available";
        }
        console.log(SpellData);
    });
}

showAPI ();

//Animation für die Speech Bubble//

const hat = document.querySelector(".hat");
const speechBubble = document.querySelector(".speech-bubble");
