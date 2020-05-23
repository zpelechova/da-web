'use strict';

const movieTemplate = Handlebars.compile(
  'Film {{title}} začíná v {{time}}, sál číslo {{hall}}'
);

const movie1 = {
  title: 'Casablanca',
  time: '19:30',
  hall: 7,
};

// Stáhněte si připravenou stránku se vloženými Handlebars šablonami. Prohlédněte si kód v souboru index.js a otevřete stránku v prohlížeči.
// V konzoli zavolejte funkci movieTemplate s objektem movie1 a prohlédněte si výsledek.

console.log(movieTemplate(movie1))

// V souboru index.js vytvořte podle předchozího vzoru objekty movie2 a movie3 představující dva další filmy. V konzoli vyzkoušejte tyto objekty s vaší šablonou.

const movie2 = {
  title: 'Harry Potter a kámen mudrců',
  time: '17:30',
  hall: 6,
};

console.log(movieTemplate(movie2))

const movie3 = {
  title: 'Koralina',
  time: '14:00',
  hall: 1,
};

console.log(movieTemplate(movie3))

// Pomocí knihovny Handlebars vytvořte šablonu cinemaTemplate, která bude produkovat řetězce typu
// Kino Světozor, adresa: Vodičkova 41
// kde název kina a adresu specifikujete pomocí objektu s vlastnostmi name a address. Vytvořte tři objekty kin a pomocí šablony cinemaTemplate vypište do konzole následující řetězce.
// Kino Světozor, adresa: Vodičkova 41
// Kino Bio Oko, adresa: Františka Křížka 460/15
// Kino Aero, adresa: Biskupcova 31

const cinemaTemplate = Handlebars.compile(
  'Kino {{name}}, adresa: {{address}}.'
);

const kino1 = {
  name: 'Světozor',
  address: 'Vodičkova 41'
}

const kino2 = {
  name: 'Bio Oko',
  address: 'Františka Křížka 460/15'
}

const kino3 = {
  name: 'Aero',
  address: 'Biskupcova 31'
}

console.log(cinemaTemplate(kino1))
console.log(cinemaTemplate(kino2))
console.log(cinemaTemplate(kino3))

