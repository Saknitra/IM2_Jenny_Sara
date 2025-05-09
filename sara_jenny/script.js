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
                        <img id = "wandOne" src="img/Wand1.png" alt="Magic Wand">
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
        // If the animation is already running, do nothing
        if (isAnimating) return;

        // Mark animation as running
        isAnimating = true;

        // Ensure the speech bubble is hidden at the start
        speechBubble.style.opacity = "0";

        // Remove any conflicting classes
        hat.classList.remove("hatReset", "hatAnimation");
        void hat.offsetWidth;  // Trigger reflow to reset the styles

        // Add the animation class to the hat
        hat.classList.add("hatAnimation");

        // Show the speech bubble after halfway (3 seconds)
        setTimeout(() => {
            speechBubble.style.opacity = "1";  // Make speech bubble visible
        }, 3000);

        // After the full animation duration (6 seconds), reset the hat position
        setTimeout(() => {
            // Reset the hat position and hide the speech bubble
            hat.classList.remove("hatAnimation");
            hat.style.transform = "translateX(-70px) rotate(0deg)";  // Reset position
            speechBubble.style.opacity = "0";  // Hide the speech bubble

            // Add a reset class to indicate it's ready for the next hover
            hat.classList.add("hatReset");

            // Mark animation as complete and allow the next animation
            isAnimating = false;
        }, 6000);  // Reset after 6 seconds (the duration of the animation)
    }
    // Trigger animation when hovering over the hat
    hat.addEventListener("mouseenter", animateWithSpeechBubble);

});


    
