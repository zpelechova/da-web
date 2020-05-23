'use strict';
// Použijte kód z předchozího cvičení. Upravte vaši šablonu tak, aby z jednotlivých kin generovala řetězce, které obsahují takovéto HTML:

// <span class="name">Světozor</span><span class="address">Vodičkova 41, Praha 1</span>
// V konzoli vyzkoušejte, že vaše šablona skutečně generuje HTML podle zadaného kina.
// Ve vaší aplikaci ze stránky vyberte element s třídou cinema__head a nastavte mu innerHTML na text vygenerovaný vaší šablonou. Vyzkoušejte vygenerovat názvy pro různá kina.


const cinemaTemplate2 = Handlebars.compile(
  '<span class="name">{{name}}</span><span class="address">{{address}}</span>'
);

const kinoElm = document.querySelector('.cinema__head')
kinoElm.innerHTML = cinemaTemplate2(kino1);

console.log(cinemaTemplate2(kino1))

