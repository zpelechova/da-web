'use strict';
console.log('funguju!');
// Vylepšete program naší kuchyňské minutky tak, aby zobrazovala nejen vteřiny, ale i minuty. Layout stránky je na to připraven. Nechejte uživatele zadat minuty, nikoliv vteřiny, a správně odpočítávejte čas až k nule.

// Dejte pozor na správné formátování, kdy jednociferné hodnoty je zvykem zobrazovat s nulou na začátku. Vytvořte si funkci twoDigits, která na vstupu dostane číslo a vrátí řetězec správně naformátovaný na dvě cifry.

const startTime = () => {
  const timeElm = document.querySelector('.time-input');
  const time = timeElm.value;
  timeElm.value = '';
  let timeNumber = Number(time);
  const secElm = document.querySelector('.alarm__seconds');

  // const twoDigits = (number) => {
  //   if (number >= 10) {
  //     return String(number)
  //   }
  //   else if (number < 10) {
  //     return '0' + String(number)
  //   }
  // };

  secElm.textContent = String(twoDigits(timeNumber))
    ;
  console.log(timeNumber);

  const countdown = () => {
    timeNumber = timeNumber - 1;
    if (timeNumber >= 0) {
      secElm.textContent = String(twoDigits(timeNumber))
      console.log(timeNumber)
    };
  }

  setInterval(countdown, 1000)

  const ring = () => {
    document.querySelector('audio').play()
    document.querySelector('.alarm').classList.add('alarm--ring');
  }
  
  setTimeout(ring, timeNumber * 1000)
}

const button = document.querySelector('button')
button.addEventListener("click", startTime)