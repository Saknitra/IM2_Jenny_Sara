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

const allWands = [
    'img/wand1.png',
    'img/wand2.png',
    'img/wand3.png',
    'img/wand4.png',
    'img/wand5.png',
    'img/wand6.png',
    'img/wand7.png',
    'img/wand8.png',
    'img/wand9.png',
    'img/wand10.png',
]

let lastWand = null;

// Funktion zum Generieren einer zufälligen Zauberstabs
function getRandomWand() {
   const availableWands = allWands.filter(wand => wand !== lastWand);
    const newWand = availableWands[Math.floor(Math.random() * availableWands.length)];
  lastWand = newWand;
  return newWand;
}

//API anzeigen//
function showAPI () {
    let APIButton = document.createElement("button");
    APIButton.id = "APIButton";
    APIButton.classList.add("button");

    let buttonText = document.createElement("span");
    buttonText.innerText = "Generate Random Spell";   
    buttonText.classList.add("TextInButton");
    APIButton.appendChild(buttonText);

    buttonContainer.appendChild(APIButton);
    APIButton.addEventListener("click", async () => {
        
        const TextAusblenden = document.getElementById("TextAnfangFull");
        TextAusblenden.style.display = "none";

        buttonText.innerText = "Generate Another Spell!";
        
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
                    <div id = WandsInCard>
                        <img id = "wandOne" src="${getRandomWand()}" alt="Magic Wand">
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

document.addEventListener("DOMContentLoaded", () => {
    const hat = document.querySelector(".hat");
    const speechBubble = document.querySelector(".speech-bubble");

    // Flag to check if the animation is running
    let isAnimating = false;

    // Function to start the animation and show the speech bubble
    function animateWithSpeechBubble() {

        // Remove any conflicting classes
        hat.classList.remove("hatAnimation");
          void hat.offsetWidth;  // Force reflow
        hat.classList.add("hatAnimation");
       
        speechBubble.classList.remove("animate-bubble");
        void speechBubble.offsetWidth; // Force reflow
        speechBubble.classList.add("animate-bubble");


        setTimeout(() => {
            hat.classList.add("hatAnimation");
        }, 100);
    }
    // Trigger animation when hovering over the hat
    hat.addEventListener("mouseenter", animateWithSpeechBubble);

});


    
