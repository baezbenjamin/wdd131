const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lessons = [
    {
        courseName: "Morning Star",
        englishLevel: "Beginner",
        type: "Individual",
        imageSrc: "images/lesson-1.jpg"
    },
    {
        courseName: "Protostar",
        englishLevel: "Beginner",
        type: "Group",
        imageSrc: "images/lesson-4.jpg"
    },
    {
        courseName: "Shooting Star",
        englishLevel: "Intermediate",
        type: "Individual",
        imageSrc: "images/lesson-3.jpg"
    },
    {
        courseName: "Nova",
        englishLevel: "Intermediate",
        type: "Group",
        imageSrc: "images/lesson-2.jpg"
    },
    {
        courseName: "Supernova",
        englishLevel: "Advanced",
        type: "Individual",
        imageSrc: "images/lesson-5.jpg"
    },
    {
        courseName: "Shining Star",
        englishLevel: "Advanced",
        type: "Group",
        imageSrc: "images/lesson-6.jpg"
    }
]

createLessonCard(lessons);

const beginnerLink = document.querySelector('#beginner');
const intermediateLink = document.querySelector('#intermediate');
const advancedLink = document.querySelector('#advanced');
const individualLink = document.querySelector('#individual');
const groupLink = document.querySelector('#group');

beginnerLink.addEventListener('click', () => {
    createLessonCard(lessons.filter(lesson => lesson.englishLevel == "Beginner"))
})

intermediateLink.addEventListener('click', () => {
    createLessonCard(lessons.filter(lesson => lesson.englishLevel == "Intermediate"))
})

advancedLink.addEventListener('click', () => {
    createLessonCard(lessons.filter(lesson => lesson.englishLevel == "Advanced"))
})

individualLink.addEventListener('click', () => {
    createLessonCard(lessons.filter(lesson => lesson.type == "Individual"))
})

groupLink.addEventListener('click', () => {
    createLessonCard(lessons.filter(lesson => lesson.type == "Group"))
})

function createLessonCard(filteredLessons) {
    document.querySelector('.container').innerHTML = "";
    filteredLessons.forEach(lesson => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let level = document.createElement("p");
        let type = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = lesson.courseName;
        level.innerHTML = `<span class="label">Level:</span> ${lesson.englishLevel}`;
        type.innerHTML = `<span class="label">Type:</span> ${lesson.type}`;
        img.setAttribute("src", lesson.imageSrc);
        img.setAttribute("alt", `${lesson.courseName} Course`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(level);
        card.appendChild(type);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
}

document.querySelectorAll(".option").forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll(".option").forEach(opn => opn.classList.remove("active"));
        option.classList.add("active");
    });
});