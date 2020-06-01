'use strict';
 
// Vytvoř Vue aplikaci pro zobrazování kontaktů
// - založ instanci Vue
// - do dat instance si zkopíruj pole ze souboru databaze.js
// - uprav HTML a udělej z něj šablonu Vue
// - do části "prehled" vygeneruj pomocí v-for seznam všech kontaktů
// - do dat přidej vlastnost, která bude obsahovat index aktuálně
//   vybraného kontaktu - výchozí hodnota 0 (první prvek v poli)
// - do HTML, do části "detail" zobraz všechny údaje aktuálně
//   vybraného kontaktu
// - na prvky seznamu přidej událost, která po kliknutí přepne
//   aktuálně vybraný kontakt

new Vue({
  el: '#app',
  data: [
    {
      jmeno: 'Marie Vacková',
      vek: 29,
      telefon: '+420 158 456 789',
      pozice: 'zdravotní sestra',
      hledaPraci: true,
      foto: 'foto01.jpg'
    },
    {
      jmeno: 'Monika Nováková',
      vek:26 ,
      telefon: '+420 687 459 356',
      pozice: 'učitelka',
      hledaPraci: false,
      foto: 'foto02.jpg'
    },
    {
      jmeno: 'Lucie Žáčková',
      vek: 32,
      telefon: '+420 679 245 357',
      pozice: 'asistentka',
      hledaPraci: false,
      foto: 'foto03.jpg'
    }],
  }
})