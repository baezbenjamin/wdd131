const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

const mod = document.querySelector("#lastModified");

mod.innerHTML = `<p>Last Modification: ${document.lastModified}</p>`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {

        templeName: "Asunción Paraguay",
        location: "Asunción, Paraguay",
        dedicated: "2002, May, 19",
        area: 11906,
        imageUrl:
            "images/asuncion_paraguay_temple.webp"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "images/rome_italy_temple.webp"
    },
    {
        templeName: "Helsinki Finland",
        location: "Helsinki, Finland",
        dedicated: "2006, October, 22",
        area: 16350,
        imageUrl:
            "images/helsinki_finland_temple_grounds_.webp"
    },
    {
        templeName: "Lisbon Portugal",
        location: "Lisbon, Portugal",
        dedicated: "2019, September, 15",
        area: 23730,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/400x250/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg"
    },
    {
        templeName: "Concepción Chile",
        location: "Concepción, Chile",
        dedicated: "2018, October, 28",
        area: 23095,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/04-Concepcion-Chile-Temple-2114385.jpg"
    }
];

createTempleCard(temples);

const largeLink = document.querySelector('#large');
const smallLink = document.querySelector('#small');

const newLink = document.querySelector('#new');
const oldLink = document.querySelector('#old');

largeLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

function GetYear(date) {
    let parts = date.split(", ");
    let year = parts[0];
    return year;
  }

newLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple =>
        GetYear(temple.dedicated) > 2000));
});

oldLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple =>
        GetYear(temple.dedicated) < 1900));
});


function createTempleCard(filteredTemples) {
    document.querySelector('.container').innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy")

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    })
}

