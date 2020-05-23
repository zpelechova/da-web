'use strict';

console.log('funguju!');

// Umožněte uživateli zadat počet vteřin skrze připravené textové poličko. K získání hodnoty z políčka použijte vlastnost value. Nezapomeňte obsah políčka zkonvertovat na číslo. Minutku spusťte tlačítkem Start.

// Zařiďte, aby minutka správně odpočítávala vteřiny a začala zvonit ve chvíli, kdy dosáhne nuly. Pokud si věříte, zkuste celý program napsat rovnou bez nápovědy. Pokud malinko ztrácíte půdu pod nohama, následujte tyto kroky.

// Vytvořte si proměnou time, do které uložíte počáteční počet vteřin zadaný uživatelem.
// Při kliknutí na Start nastavte časovač pomocí setInterval. Ten se bude opakovat každou vteřinu a pokaždé sníží hodnotu v proměnné time o jedna.
// Jakmile proměnná time dosáhne nuly, zapněte zvonění a zrušte časovač aby nezačal počítat do mínusu.

const startTime = () => {
  const timeElm = document.querySelector('.time-input');
  const time = timeElm.value;
  timeElm.value = '';
  let timeNumber = Number(time);
  const secElm = document.querySelector('.alarm__seconds');

  const twoDigits = (number) => {
    if (number >= 10) {
      return String(number)
    }
    else if (number < 10) {
      return '0' + String(number)
    }
  };

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