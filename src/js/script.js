// 1. variabili per il carosello
const right = document.getElementById("right-arrow"); // variabile costante che si aggancia all'id "right-arrow"
const left = document.getElementById("left-arrow"); // variabile costante che si aggancia all'id "left-arrow"
const choiceMonster = document.getElementById("current-monster"); // variabile costante che si aggangia all'id dell'img

// 2. variabili per il counter
const minus = document.getElementById("btn-minus"); // variabile costante che si aggancia all'id del "btn-minus"
const plus = document.getElementById("btn-plus"); // variabile costante che si aggancia all'id del "btn-plus"
const totalCount = document.getElementById("counter"); // variabile costante che si aggancia all'id di "counter" dello span

// 3. array per la lista delle monster
const monsterList = [
    // PRIMA MONSTER
    {
        name: "Monster Classic", //nome dell'immagine
        image: "/src/assets/image/monster-energy-drink-classic.png", // percorso dell'immagine
        count: 0 // tiene il conto delle moster bevute della monster selezionata
    },
    // SECONDA MONSTER
    {
        name: "Monster White Ultra", // nome dell'immagine 
        image: "/src/assets/image/monster-energy-drink-white-zero-sugar.png", // percorso dell'immagine
        count: 0 // tiene il conto delle moster bevute della monster selezionata
    },
    // TERZA MONSTER
    {
        name: "Monster Ultra Black", // nome dell'immagine 
        image: "/src/assets/image/monster-energy-drink-ultra-black.png", // percorso dell'immagine
        count: 0 // tiene il conto delle moster bevute della monster selezionata
    }
]

// variabile mutabile per l'indice del carosello
let currentMonsterIndex = 0; // parte da 0, cioè la Monster Classic

// METODI ADDEVENTLISTENER

// 1. eventi per il carosello
// addEventListener per il tasto della freccia destra
right.addEventListener('click', () => {
    if(currentMonsterIndex === 2) {
        currentMonsterIndex = 0; // se è l'ultima, torna alla prima
    } else {
        currentMonsterIndex++; // altrimenti va avanti di 1
    }
    choiceMonster.src = monsterList[currentMonsterIndex].image; // questo cambia la sorgente dell'immagine
    totalCount.innerText = monsterList[currentMonsterIndex].count;
})

// addEventListener per il tasto della freccia sinistra
left.addEventListener('click', () => {
    if(currentMonsterIndex === 0) {
        currentMonsterIndex = 2; // se è la prima, salta all'ultima (VR46)
    } else {
        currentMonsterIndex--; // altrimenti torna indietro di 1
    }
    choiceMonster.src = monsterList[currentMonsterIndex].image; // questo cambia la sorgente dell'immagine
    totalCount.innerText = monsterList[currentMonsterIndex].count;
})


// 2. metodi per il counter
// addEventListener per far funzionare il bottone "+"
plus.addEventListener('click', () => {
    monsterList[currentMonsterIndex].count++; // aumenta la memoria di 1
    totalCount.innerText = monsterList[currentMonsterIndex].count; // mostra il valore pulito sullo schermo
})

// addEventListener per far funzionare il bottone "-"
minus.addEventListener('click', () => {
    if (monsterList[currentMonsterIndex].count > 0) { // controlla che il numero sia maggiore di 0
        monsterList[currentMonsterIndex].count--; // diminuisce la memoria di 1
        totalCount.innerText = monsterList[currentMonsterIndex].count; // mostra il valore pulito sullo schermo
    }
})