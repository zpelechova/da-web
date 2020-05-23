'use strict';

// Pokračujte v řešení příkladu z cvičení Program kina.

// Uvnitř index.html vytvořte šablonu pro element představující jeden film. Nezapomeňte, že šablona musí obsahovat i hlavní div elementu s třídou movie.
// Upravte kód pro kompilaci Handlebars šablony tak, aby používal HTML kód vytažený z vašeho template elementu.
// Upravte funkci renderMovie tak, aby správně vytvořila element z vaší šablony. Vyhněte se zkládání zbytečného divu pomocí vlastnosti children.

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

const cinemaTemplate4 = Handlebars.compile(
  document.querySelector('#movie_template').innerHTML
);

const movie1 = {
  title: 'Zaklínač',
  time: '19:00',
  hall: 2
};

const renderMovie = (movie) => {
  const helperELm = document.createElement('div');
  helperELm.innerHTML = cinemaTemplate4(movie);
  return helperELm.children[0];
};

for (let i = 1; i < cinema1.movies.length; i++) {
  renderMovie(cinema1.movies[i])
  const moviesListElm = document.querySelector('.cinema__movies');
  const elm = renderMovie(movie1);
  moviesListElm.appendChild(elm);
}


//jeste doplnim, o jake jde kino

const cinemaTemplate2 = Handlebars.compile(
  '<span class="name">{{name}}</span><span class="address">{{address}}</span>'
);

const kinoElm = document.querySelector('.cinema__head')
kinoElm.innerHTML = cinemaTemplate2(cinema1);