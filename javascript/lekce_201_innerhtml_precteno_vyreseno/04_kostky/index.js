'use strict';
console.log('funguju!');

// Prohlédněte si HTML kód a zapamatujte si, jak se vytváří kostka s danou hodnotou. Poté v HTML ručně vymažte obsah elementu dice-row. Jeho obsah totiž budeme tvořit pomocí JavaScriptu.

// <img class="dice" src="img/side2.svg" />
// <img class="dice" src="img/side3.svg" />

// Vytvořte pole dice, které bude obsahovat číselné hodnoty několika kostek, například 5, 1 a 3.
let dice = [5, 1, 3]

// Napište funkci updateDice, která zobrazí kostky ve vašem poli. To provedete tak, že vyberete element dice-row a pomocí cyklu projdete celé pole kostek. Pro každou hodnotu v cyklu přidáte do innerHTML tohoto elementu jeden obrázek kostky.

const updateDice = () => {
  const diceElm = document.querySelector('#dice-row');
  diceElm.innerHTML = ''
  for (let i = 0; i < dice.length; i++) {
    diceElm.innerHTML += `<img class="dice" src="img/side${dice[i]}.svg" />`
  }
}

// Vyzkoušejte si v konzoli, že vaše funkce funguje. Přidejte do pole kostek novou hodnotu a vyzkoušejte, že po zavolání této funkce se stránka správně aktualizuje.
dice.push(6);
updateDice()

// Upravte váš program tak, aby se po stisknutí tlačíka Přidat na stránce objevila nová kostka s nějakou hodnotou. Můžete ji zkusit rovnou vylosovat náhodně.
const addDice = () => {
  dice.push(Math.floor(Math.random() * Math.floor(6) + 1));
  updateDice();
};

const addElm = document.querySelector('#btn-add');
addElm.addEventListener('click', addDice);

// Upravte váš program tak, aby se po stisknutí tlačíka Zamíchat náhodně změnily hodnoty na všech kostkách, které jsou právě na stránce zobrazené.
const shuffleDice = () => {
  const numberOfDices = dice.length;
  dice = [];
  const diceElm = document.querySelector('#dice-row');
  for (let i = 0; i < numberOfDices; i++) {
    addDice()
  }
}

const shuffleElm = document.querySelector('#btn-shuffle');
shuffleElm.addEventListener('click', shuffleDice);
