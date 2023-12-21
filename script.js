const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Quelle est la plus grande planète du système solaire ?",
        options: ["Terre", "Vénus", "Jupiter", "Mars"],
        answer: "Jupiter"
    },
    {
        question: "Quelle est la plus jolie fille du monde entier",
        options: ["Oui", "Non", "Pierre Fabre", "Dorian Puechbrossou"],
        answer: "Oui"
    },
    {
        question: "sur qui crush raphael delhomenede",
        options: ["Oui", "Non", "Samuel Processeur", "Apolline Pérol"],
        answer: "Samuel Processeur"
    },
    {
        question: "quel est le jeu vidéo préféré de Tom Morzières",
        options: ["Oui", "Non", "Géometry Dash", "Brawl Stars"],
        answer: "Géometry Dash"
    },
    {
        question: "Quelle est la priorité à respecter à un rond-point ?",
        options: ["Priorité à droite", "Priorité aux véhicules circulant sur le rond-point", "Priorité aux véhicules entrant sur le rond-point", "Pas de priorité"],
        answer: "Priorité aux véhicules circulant sur le rond-point",
        explanation: "La priorité à respecter à un rond-point est accordée aux véhicules qui circulent déjà sur le rond-point."
    },
    {
        question: "Quelle est la vitesse maximale autorisée en agglomération ?",
        options: ["30 km/h", "50 km/h", "70 km/h", "90 km/h"],
        answer: "50 km/h",
        explanation: "En agglomération, la vitesse maximale autorisée est généralement de 50 km/h, sauf indication contraire."
    },
    {
        question: "Que signifie un feu orange clignotant ?",
        options: ["Ralentir et être prêt à s'arrêter", "Continuer sans s'arrêter", "Accélérer", "Panneau hors service"],
        answer: "Ralentir et être prêt à s'arrêter",
        explanation: "Un feu orange clignotant signifie que le feu tricolore est en panne. Les conducteurs doivent ralentir et être prêts à s'arrêter."
    }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.textContent = option;
        optionBtn.classList.add('option');
        optionsElement.appendChild(optionBtn);

        optionBtn.addEventListener('click', () => checkAnswer(index));
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    if (question.options[selectedIndex] === question.answer) {
        score++;
        resultElement.textContent = "Bonne réponse !";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Mauvaise réponse.";
        resultElement.style.color = "red";
    }
    
    nextBtn.disabled = false;
    optionsElement.classList.add('disabled');
    document.querySelectorAll('.option').forEach(optionBtn => optionBtn.disabled = true);
}

function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        resultElement.textContent = '';
        optionsElement.classList.remove('disabled');
        document.querySelectorAll('.option').forEach(optionBtn => optionBtn.disabled = false);
        nextBtn.disabled = true;
    } else {
        questionElement.textContent = '';
        optionsElement.innerHTML = '';
        resultElement.textContent = `Votre score : ${score}/${questions.length}`;
    }
}

nextBtn.addEventListener('click', showNextQuestion);

showQuestion();
