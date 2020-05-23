'use strict';
// Pokračujte v řešení z předchozího cvičení. Pro jedno kino použije objekt, který vypadá následovně.

const cinema1 = {
  name: 'Světozor',
  address: 'Vodičkova 41',
  movies: [
    {
      title: 'Casablanca',
      time: '18:30',
      hall: 7,
    },
    {
      title: 'Pán prstenů: Dvě věže',
      time: '17:45',
      hall: 4,
    },
    {
      title: 'Hobbit',
      time: '17:40',
      hall: 5,
    },
    {
      title: 'Špunti na vodě',
      time: '16:45',
      hall: 1,
    },
    {
      title: 'Zaklínač',
      time: '19:00',
      hall: 2,
    },

  ],
};
// Vytvořte Handlebars šablonu, která bude pro každý film vytvářet HTML vypadající takto:

const cinemaTemplate3 = Handlebars.compile(
  `
  <span class="movie__title">{{ title }}</span>
  <span class="movie__time">{{time}}</span>
  <span class="movie__hall">Sál č. {{hall}}</span>
  `
);

// Vezměte první film a pomocí vaší šablony a funkce document.createElement pro něj vytvořte DOM element, který bude vypadat takto.

const movieElm = document.createElement('div');
movieElm.innerHTML = `
<div class="movie">
${cinemaTemplate3(cinema1.movies[0])}
</div>`

// Ze stránky vyberte element se třídou cinema__movies a pomocí metody appendChidl do něj zapojte váš nový DOM element.

const movieElm2 = document.querySelector('.cinema__movies');
movieElm2.appendChild(movieElm)

// Upravte váš předchozí kód tak, že vytvoříte funkci renderMovie, která jako svůj vstup bere jeden objekt filmu. Tato funkce bude vytvářet váš DOM element pro jeden film, který vrátí pomocí return.

const renderMovie = (movie) => {
  const helperElm = document.createElement('div');
  helperElm.innerHTML = `
    <div class="movie">
    ${cinemaTemplate3(movie)}
    </div>`
  return helperElm.children[0]
}

// Přidejte do objektu s programem kina nějaké další filmy. Pomocí cyklu projděte seznam filmů, pro každý film pomocí renderMovie vytvořte příšlušný DOM element a vložte jej na stránku.

for (let i = 1; i < cinema1.movies.length; i++){
  const movieListElm = document.querySelector('.cinema__movies');
  const elm = renderMovie(cinema1.movies[i])
  movieListElm.appendChild(elm)
  console.log(elm)
}

