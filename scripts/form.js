const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

const mod = document.querySelector("#lastModified");

mod.innerHTML = `<p>Last Modification: ${document.lastModified}</p>`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productSelect = document.querySelector("#product");

products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.innerHTML = product.name;
    
    productSelect.appendChild(option);
})

const visitsCounter = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsCounter.textContent = numVisits;
} else {
    visitsCounter.textContent = `Thanks for your first Submition!`;
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);