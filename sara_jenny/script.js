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
    myData.forEach(element => {
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

document.getElementById("APIButton").addEventListener("click", async () => {
    const SpellData = await fetchData(API_URL);

    const spellOutput = document.getElementById("spellOutput");

    if (data.name && data.description) {
        spellOutput.innerHTML = `
            <h2>"Name:"</h2>
            <h3>${data.name}</h3>
            <h2>"Description:"</h2>
            <h3>${data.description}</h3>
            ` ;
    } else {
        spellOutput.innerText = "No data available";
    }
    console.log(SpellData);
});
    