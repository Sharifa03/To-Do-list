//selecteert alle knopjes in de html
const taskInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');
const completedList = document.getElementById('completed-list'); // De 2e lijst

//Thema knoppen
//By assigning document.body to the const body variable, you create a shorter, more convenient reference. 
//Instead of typing document.body repeatedly throughout your code
const body = document.body;

const lightBtn = document.getElementById('light-mode-btn');
const darkBtn = document.getElementById('dark-mode-btn');
const pinkBtn = document.getElementById('pink-mode-btn');

//Sorteer knop
const sortButton = document.getElementById('sort');


//DE FUNCTIES (Wat moet er gebeuren?)

//Functie voor het toevoegen van een taak
function voegTaakToe() {
    const taakTekst = taskInput.value;

    // IF-ELSE: Check of de invoer leeg is
    if (taakTekst === "") {
        alert("Ho Stop! Je kunt geen lege taak toevoegen.");
    } 
    
    else {
        // Maak een nieuw lijst-item (li)
        const newTask = document.createElement('li');
        newTask.textContent = taakTekst;

        // Maak de knop voor 'Klaar'
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Klaar';
        
        // Als je op 'Klaar' klikt, gaat hij naar de andere lijst
        doneBtn.addEventListener('click', function() {
            verplaatsNaarAfgehandeld(newTask, doneBtn);
        });

        // Voeg de knop toe aan de taak, en de taak aan de lijst
        newTask.appendChild(doneBtn);
        todoList.appendChild(newTask);

        // Maak het invoerveld weer leeg
        taskInput.value = '';
    }
}


// Functie om de taak te verplaatsen
function verplaatsNaarAfgehandeld(taakElement, deKnop) {
    // Verplaats de 'li' naar de tweede lijst
    completedList.appendChild(taakElement);

    // Verander de tekst van de knop
    deKnop.textContent = 'Verwijder';
    
    // Zorg dat de knop nu de taak echt verwijdert
    deKnop.onclick = function() {
        taakElement.remove();
    };

}

// Functies voor thema's
function clearThemes() {
    body.classList.remove('light-mode', 'dark-mode', 'pink-mode');
}


//EVENT LISTENERS (De knoppen activeren)

// Luister naar de Add knop
addTaskButton.addEventListener('click', voegTaakToe);

// Luister naar de Thema knoppen
lightBtn.addEventListener('click', () => {
    clearThemes();
    body.classList.add('light-mode');
});

darkBtn.addEventListener('click', () => {
    clearThemes();
    body.classList.add('dark-mode');
});

pinkBtn.addEventListener('click', () => {
    clearThemes();
    body.classList.add('pink-mode');
});

// Luister naar de Sorteer knop
sortButton.addEventListener('click', function () {
    // Maak een lijstje van alle huidige taken
    const tasks = Array.from(todoList.querySelectorAll('li'));
    
    // Sorteer ze op alfabet
    tasks.sort((a, b) => {
        return a.textContent.toLowerCase() > b.textContent.toLowerCase() ? 1 : -1;
    });

    // Maak de lijst leeg en zet ze er in de goede volgorde weer in
    todoList.innerHTML = '';
    tasks.forEach(task => {
        todoList.appendChild(task);
    });
});

// maak hier de math random //

// of maak verander tekst knop //


// bronnen lijst//
// MDN web docs - JavaScript reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// JavaScript.info - The Modern JavaScript Tutorial - https://javascript.info/
// boek: javascript for kids - nick morgan//
// youtuve video: https://www.youtube.com/watch?v=0Ao1UN1WSCw&t=339s
// kennis clips op DLO
// voorbeeld codes https://v1.scrimba.com/playlist/pZgNL9HV