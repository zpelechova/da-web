// Stáhněte si webovou stránku, která má fungovat jako počítadlo. Při klikání na tlačítka up a down by počítadlo správně mělo narůst nebo poklesnout o jedna. Nic takového se však neděje, neboť v kódu stránky je mnoho chyb. Použijte znalosti nabyté v této lekci ke splnění následujících úkolů.

// Bez použítí debugování opravte všechny chyby, které runtime vypisuje do konzole.
// Když vyřešíte všechna chybová hlášení, program stejně nebude fungovat. Použije ladící nástroje a odhalte poslední problémy, které brání programu ve správném fungování.


const updateCounter = (number) => {
  const valueElm = document.querySelector('.counter__value');
  valueElm.textContent = String(number).padStart(2, '0');
};

let value = 15;
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');

btnUp.addEventListener('click', () => {
  if (value < 59) {
    value += 1;
    updateCounter(value);
  }
});

btnDown.addEventListener('click', () => {
  if (value > 0) {
    value -= 1;
    updateCounter(value);
  }
});

updateCounter(value); 