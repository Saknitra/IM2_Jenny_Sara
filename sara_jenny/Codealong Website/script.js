console.log("Hello World!");

const container = document.querySelector('#spell-container');

const API_URL = 'https://hp-api.onrender.com/api/spells';


async function fetchData(URL) {
    try {
        const response = await fetch(URL);
        return await response.json();
        } catch (e) {
            console.error(e);
            return[]
        }
    }

    const myData = await fetchData(API_URL);
    console.log(myData[0].description);

    function showData() {
        myData.forEach((element) => {
            let card = document.createElement('article');
            card.classList.add("card");
            card.innerHTML = `
            <h2>${element.name}</h2>
            <p>${element.description}</p>
            `;

            container.appendChild(card);

        });
    };

    

    showData();
