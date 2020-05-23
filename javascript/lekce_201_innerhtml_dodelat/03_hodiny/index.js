'use strict';
console.log('funguju!');

// Stáhněte si základ stránky zobrazující digitální hodiny. Následujte instrukce níže.

// Vytvořte proměnné hours a minutes. Tyto proměnné budou představovat data vaší aplikace. Nastavte tyto proměnné na nějaký čas, například 12:35.
// Vytvořte funkci updateClock, která zařídí, že na naší stránce se zobrazí čas, který je uložen v těchto proměnných.
// V konzoli prohlížeče zkuste několikrát změnit hodnoty v proměnných hours a minutes. Po každé změně zavolejte funkci updateClock a sledujte, jestli se stránka správně aktualizuje.
// Ve funkci updateClock nezapomeňte zařídit, aby hodiny správně zobrazovaly nulu na začátku jednociferných čísel.

let hours = 12
let minutes = 56

const twoDigits = (number) => {if (number >=10) {
  return String(number)
} else return ('0' + String(number))
}
const updateClock = (hours, minutes) => {
  const hoursElm = document.querySelector('.clock__hours');
  const minutesElm = document.querySelector('.clock__minutes');
  hoursElm.textContent = twoDigits(hours);
  minutesElm.textContent = twoDigits(minutes);
}

updateClock(hours, minutes)