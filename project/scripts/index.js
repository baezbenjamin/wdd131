const messages = ["Have you taken your lesson?", "How was the experience so far?", "Keep learning every day!", "Never give up!", "Let's study together!", "Don't miss your spot!"]
const randomMessage = messages[Math.floor(Math.random() * messages.length)];

const displayRandomMessage = document.querySelector(".random-message");

const visitsDisplay = document.querySelector(".visits-count");

let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0 && numVisits !== 1) {
    visitsDisplay.innerHTML = `You have visited this page ${numVisits} times.`;
    displayRandomMessage.innerHTML = `<span>${randomMessage}</span>`;
} else if (numVisits == 1) {
    visitsDisplay.innerHTML = `You have visited this page ${numVisits} time.`;
}
else {
    visitsDisplay.innerHTML = `This is your first time around here. Schedule your lesson today!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;