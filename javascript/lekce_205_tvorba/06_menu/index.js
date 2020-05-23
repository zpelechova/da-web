'use strict';
// Stáhněte si webovou stránku s jídelním lístkem restaurace.

// Prohlédněte si strukturu projektu.
// Vyčleňte z projektu komponentu MenuItem. Vytvořte pro ni speciální složku. Všechen JavaScript, který patří ke komponentě vložte do nového souboru MenuItem/index.js a vložte jej do vašeho HTML souboru.
// Všechny styly, které patří ke komponentě vyčleňte do souboru MenuItem/style.js a vložte jej do vašeho HTML souboru. Napozemeňte na složku s obrázkem.
// Zařiďte, aby aplikace opět správně fungovala.

const menu = [{
  den: 'pondělí',
  menicko: [
    {
      title: 'Telecí hanger steak',
      info: 'Tymiánový porto demiglace, květákové pyré, ragú ze žluté řepy s bylinkami',
      price: 299,
    },
    {
      title: 'Grilované kuřecí stripsy',
      info: 'Stehenní kuřecí stripsy marinované v bílém jogurtu s limetkou a kurkumou, máslový kuskus s mátou, lístky rukoly, bylinkový dip',
      price: 169,
    },
  ]
},

{
  den: 'úterý',
  menicko: [
    {
      title: 'Quesadilla s kuřecím masem',
      info: 'Se sýrem cheddar, jalapenos papričkami a bbq omáčkou, malý listový salátek, česnekový dip',
      price: 159,
    },
    {
      title: 'Čočka na kyselo',
      info: 'Uzená krkovice, sázené vejce, kyselá okurka, cibulka smažená v sádle',
      price: 149,
    },
  ]
},
{
den: 'středa',
  menicko: [
    {
      title: 'Žemlovka',
      info: 'Krásně vypečená',
      price: 199,
    },
    {
      title: 'Pstruh na másle',
      info: 'S kmínem',
      price: 249,
    },
  ]
},
];

const menuListElm = document.querySelector('.menu_list');
for (let i = 0; i < menu.length; i++) {
menuListElm.appendChild(renderMenu(menu[i]));
}