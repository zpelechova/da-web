// Podcasty 2
// zapni hlavu
// Stáhněte si vzorové řešení aplikace podcasty z předchozí lekce. Otevřete si aplikaci v prohlížeši a přesuňte se do JavaScriptové konzole. Zkuste ručně vyrobit DOM element jedné epizody.

// Pomocí funkce document.createElement vytvořte prázdný div a uložte si jej do proměnné episodeElm. Vyzkoušejte v konzoli, že se element povedlo vytvořit.
// Nastavte elementu třídu episode a opět zkontrolujte, že se změna podařila.
// Nastavte elementu innerHTML. Obsah je docela dlouhý řetězec, který se v konzoli píše nepohodlně. Vložte tedy do innerHTML zatím jen div s číslem episody. Opět otestujte, že se operace povedla.
// Vyberte v konzoli element episodes-list a vložte do něj váš nový DOM element pomocí metody appendChild.
// Nyní přesuneme náš kód z konzole do funkce.

const episodeElm = document.createElement('div');
episodeElm.className = 'episode';

episodeElm.innerHTML = `<div> ${episodes[0][0]} </div>`

episodesList.appendChild(episodeElm)

// Ve vašem programu vytvořte funkci renderEpisode, která bude mít tři parametry: num, title a guest. Funkce vrátí nový DOM element sestavený stejnám způsobem jako jsme prve použili v konzoli. Atribut innerHTML už nastavte na plný obsah elementu a zakompounujte do něj údaje z parametrů funkce.
// V programu najdete cyklus, který vytváři strukturu podcastu. Upravte tento cyklus tak, aby používal funkci renderEpisode a metodu appendChild.

const episodesList = document.querySelector('.episodes-list');
for (let i = 0; i < episodes.length; i += 1) {
  const renderEpisode = (num, title, guest) => {
    const episodeElm = document.createElement('div');
    episodeElm.className = 'episode';
    episodeElm.innerHTML = `
      <div class="episode">
        <div class="episode__num">${num}</div>
        <div class="episode__body">
          <div class="episode__title">${title}</div>
          <div class="episode__guest">${guest}</div>
        </div>
      </div>`;
    episodesList.appendChild(episodeElm)
  }
  renderEpisode(episodes[i][0], episodes[i][1], episodes[i][2])
};
