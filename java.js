// theorie //

// javascript heeft functies zoals log, remove ect, en die roep je aan met "." dus .log bijvoorbeeld.
// functie voor add button//

// je zoekt de button met getElementById in de html en selecteert hem, dan geef je het een naam addtaskbtn
// Nu weet de computer: "Oh, als hij 'addTaskButton' zegt, dan bedoelt hij die ene knop."
const addTaskButton = document.getElementById('add-task-btn');
const completed = document.getElementById('completed');

// Dit is de zoekopdracht. Je zegt: "Computer, zoek naar de knop die het labeltje 'add-task-btn' heeft."
// met de addEventListener zorg je ervoor dat wanneer je op de knop klikt, er iets gebeurt.

addTaskButton.addEventListener('click', function () {
    // Als ik op add klik dan komt er een nieuwe taak in de lijst//
    
    //selecteer het input veld met getelement by id//
    const taskInput = document.getElementById('todo-input');

    // dit selecteert de ul met id todo-list//
    const todoList = document.getElementById('todo-list');



    // ik zeg tegen de computer hey, maak een list item aan, ookal bestaat hij niet in de ul. hij is dus ontzichtbaar//
    const newTask = document.createElement('li');
    // newtask is dus die ontzichtbare li, textcontent is de tekst, taskinput.value is wat er in het input veld staat//
    newTask.textContent = taskInput.value;
    // appendchild selecteert die li (betekent letterlijk: "voeg toe als kind") aan de todo list//
    // die taak is nu ook zichtbaar//
    todoList.appendChild(newTask);
    // Dit zorgt er gewoon voor dat als je iets hebt getypt in de takenlijst hij het input veld leeg maakt na het toevoegen//
    taskInput.value = '';

    //maak een delete button aan//
    const deleteButton = document.createElement('button');
    newTask.appendChild(deleteButton);
    deleteButton.textContent = 'X';

    //3 stap: luisteren naar een event//
    deleteButton.addEventListener('click', deleteToDo);
});

//functie voor delete button//
function deleteToDo(event) {
    // console.log(event.target.parentNode.remove());

    //methode om de knop weg te halen//
    // event.target.parentNode.remove();

    // const nietBestaandItem = document.querySelector('.niet-bestaand');
    // met event selecteren wat er geklikt is//
    // met clickevenet target de button selecteren//
    const clickevent = event;
    const button = clickevent.target;
    const listItem = button.parentNode;

    // hier ga ik checken of list item iets is//
    if (listItem) {
        console.log('bestond!')
        listItem.remove();
    } else {
        console.log('bestaat niet!')
    }
}

// Sorteer functie voor takenlijst A-Z //
// const sortbutton selecteert de variabele in de html sort button is de naam van de actie die je later gaat geven
// document.getelementbyid: dit is de ingebouwde functie in javacript die er voor zorgt dat je iets kunt selecteren
// ('sort') is der naam van de ID die je in de html hebt gegeven aan de button (in dit geval) die je uiteindelijk de functie wil geven
const sortButton = document.getElementById('sort');

// met de qs zoekt de code alle LI, dit is een array//
// sortbutton is nog steeds de const in dit geval maar nu spreek je hem direct aan
// addeventlistiner is een functie die je aan roept
// ('click', function() dit vertelt de eventlistener van "hey ik wil dat als je klikt dat er IETS gebeurt. IETS heeft nu nog geen betekenis
// console.log("klik") zorgt er gewoon voor dat je in de console kunt zien dat er op de knop geklikt is, dit is handig o te zien of de functie die je hebt gemaakt ook echt werkt
// const tasks: tasks is gewoon de naam die je hebt gegeven aan de variabele
// = todoList.querySelectorAll('li'); -- todoList is gewoon de naam van de ID in je html die je selecteert met javascript
// met qs zoek je de li
// met de console.log(tasks[0]) zorg zorg je er voor dat je in de console log kunt zien wat de eerste item op de to-do list is.
// als iemand dus iets anders boven aan de to do list heeft staan kun je in de console log steeds zien wat boven aan staat


sortButton.addEventListener('click', function () {
    console.log("klik");
    const tasks = Array.from(todoList.querySelectorAll('li'));
    console.log(tasks[0])
    tasks.sort((a,b) => {
        return a.textContent.toLowerCase() > b.textContent.toLowerCase() ? 1 : -1;
    });
    console.log(tasks);

    document.getElementById('todo-list').innerHTML = '';
    tasks.forEach(function (task) {
        console.log("order");
        document.getElementById('todo-list').appendChild(task);
    });
});


//functie om to do lists te selecteren//
// document.body selecteert de hele body in het HTML document.
const body = document.body;

// TodoInput selecteert
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Thema knoppen selecteren//
const lightBtn = document.getElementById('light-mode-btn');
const darkBtn = document.getElementById('dark-mode-btn');
const pinkBtn = document.getElementById('pink-mode-btn');


// Met de clear themes functie zorg je er voor dat als je een thema selecteert, zoals dark of roze dat ze dan niet op elkaar//
// gestapeld worden, maar dat als je tussen de thema's klikt dat ze dan de originele thema verwijderen voordat je naar de volgende thema gaat//
// dus inplaats van roze - zwart - roze (oh ik zie roze niet meer want zwart zit er overheen)//
// wordt het nu roze - (verwijderd zwart) - roze//
function clearThemes() {
    body.classList.remove('light-mode', 'dark-mode', 'pink-mode');
}


// Event listeners voor de thema-knoppen//
console.log(lightBtn);
lightBtn.addEventListener('click', () => {
    clearThemes();
    body.classList.add('light-mode');
});

console.log(darkBtn);
darkBtn.addEventListener('click', () => {
    clearThemes();
    body.classList.add('dark-mode');
});

console.log(pinkBtn);
pinkBtn.addEventListener('click', () => {
    clearThemes();
    body.classList.add('pink-mode');
});



// bronnen lijst//
// MDN web docs - JavaScript reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// W3Schools - JavaScript Tutorial - https://www.w3schools.com/js/
// JavaScript.info - The Modern JavaScript Tutorial - https://javascript.info/
// Stack Overflow - JavaScript Questions and Answers - https://stackoverflow.com/questions/tagged/javascript