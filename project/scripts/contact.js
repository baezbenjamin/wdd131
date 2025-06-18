const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

const courses = ["Shooting Star", "Protostar", "Shooting Star", "Nova", "Supernova", "Shining Star"];

const courseSelect = document.querySelector("#course");

courses.forEach(course => {
    let option = document.createElement("option");
    let courseName = course.split(" ");
    option.value = courseName[0];
    option.innerHTML = course;
    courseSelect.appendChild(option);
})