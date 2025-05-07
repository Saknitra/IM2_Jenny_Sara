console.log("hi Javascript!")

/*API Abrufen*/
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