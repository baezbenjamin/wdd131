const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

const mod = document.querySelector("#lastModified");

mod.innerHTML = `<p>Last Modification: ${document.lastModified}</p>`;

const windChill = document.querySelector('#windchill');

let temparature = 15;
let windSpeed = 6;

function calculateWindChill(temparature, windSpeed) {
    let windChillResult = 0;
    windChillResult = 13.12 + (0.6215 * temparature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temparature * (windSpeed ** 0.16));
    return windChillResult;
}

let finalWindChill = calculateWindChill(temparature, windSpeed);

if (temparature <= 10 && windSpeed > 4.8) {
    windChill.innerHTML = `<span>${finalWindChill.toFixed(2)}°C</span>`
}
else {
    windChill.innerHTML = `<span>N/A</span>`
}
