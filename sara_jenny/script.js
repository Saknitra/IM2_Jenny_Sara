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

// Array mit allen Zauberstäben //
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

let lastWand = null; // Speichert den zuletzt verwendeten Zauberstab //

// Funktion zur Auswahl eines zufälligen Zauberstabs //
function getRandomWand() {
   const availableWands = allWands.filter(wand => wand !== lastWand);
    const newWand = availableWands[Math.floor(Math.random() * availableWands.length)];
  lastWand = newWand;
  return newWand;
}

//API anzeigen
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
        if (TextAusblenden) TextAusblenden.style.display = "none";

        buttonText.innerText = "Generate Another Spell!";
        
        const SpellData = await fetchData(API_URL);
        let count = SpellData.length;
        let randomIndex = Math.floor(Math.random() * count);
        const spell= SpellData[randomIndex];

        const textContainer = document.getElementById("TextinCard");
        const wandContainer = document.getElementById("WandsInCard");
        
        textContainer.classList.add("fade-out");
        wandContainer.classList.add("fade-out");

        setTimeout(() => {
            textContainer.innerHTML=`
                <div id ="SpellName">
                    <h2 class = "Black">Name:</h2>
                    <h3 class = "Black">${spell.name}</h3>
                </div>
                <div id ="SpellDescription">
                    <h2 class = "Black">Description:</h2>
                    <h3 class = "Black">${spell.description}</h3>
                </div>

            `;

            wandContainer.innerHTML = `
                <img id = "wandOne" src="${getRandomWand()}" alt="Magic Wand">
            `;

            textContainer.classList.remove("fade-out");
            wandContainer.classList.remove("fade-out");

            textContainer.classList.add("fade-in-zoom");
            wandContainer.classList.add("fade-in-zoom");
        }, 500);
    });
}



        /*    setTimeout(() => {
                insertNewSpell(spellOutput, spell);
            }, 500); // Wartezeit für das Ausblenden der alten Karte
        } else {
            insertNewSpell(spellOutput, spell);
        }

        function insertNewSpell(container, spell) {
            container.innerHTML = `
                <h2>Your randomly chosen spell:</h2>
                <div id = "cardForSpells" class="fade-in-start">
                    <div id = "TextinCard">
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
                const newCard = document.getElementById("cardForSpells");
                void newCard.offsetWidth; // Force reflow to trigger the fade-in animation
                newCard.classList.remove("fade-in-start");
                newCard.classList.add("fade-in-end");

        }
    });
}*/

showAPI();

// Animation für den Hut und die Sprechblase //
document.addEventListener("DOMContentLoaded", () => {
    const hat = document.querySelector(".hat");
    const speechBubble = document.querySelector(".speech-bubble");

    function animateWithSpeechBubble() {

        // Löscht die Classen für die Animation, um sie neu zu starten //
        hat.classList.remove("hatAnimation");
          void hat.offsetWidth; 
        hat.classList.add("hatAnimation");
       
        speechBubble.classList.remove("animate-bubble");
        void speechBubble.offsetWidth;
        speechBubble.classList.add("animate-bubble");


        setTimeout(() => {
            hat.classList.add("hatAnimation");
        }, 100);
    }
    // Triggert die Animation, beim hovern//
    hat.addEventListener("mouseenter", animateWithSpeechBubble);

});


    
