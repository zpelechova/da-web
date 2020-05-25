// Stáhněte si základ stránky zobrazující seznam epizod nějakého podcastu. Prohlédněte si HTML stránky. Všimněte si, že jedna epizoda podcastu se zobrazí pomocí tohoto HTML.
// V souboru index.html smažte obsah elementu episode-list. V JavaScriptu vyberte tento element a s použitím vlastnosti innerHTML v něm vytvořte jednu epizodu podcastu dle hodnot uložených v proměnných number, title a guest.
const num = '126';
const title = 'Robot, který snědl koblihu';
const guest = 'Radovan Siwek';
const episodesElm = document.querySelector('.episodes-list')
// episodesElm.innerHTML = `<div class="episode">
// <div class="episode__num">${num}</div>
// <div class="episode__body">
//   <div class="episode__title">${title}</div>
//   <div class="episode__guest">host: ${guest}</div>
// </div>
// </div>`

// Mějme následující pole obsahující několik epizod našeho podcastu.
const episodes = [
  [127, 'Hledání plyšového Yettiho', 'Vojtěch Ryba'],
  [128, 'Moderní hrachová polévka', 'Kamila Štancová'],
  [129, 'Poloautomatické zrcadlo', 'Janka Janovská'],
  [130, 'Máčené hlavy parlamentu', 'Jonáš Daněk'],
  [131, 'Služby na hraně přívěsu', 'Tereza Křivánková'],
  [132, 'Klasifikace sněžných klokanů', 'Josef Stix'],
  [133, 'Rybolov v Oceánu bouří', 'Ludmila Gajová']
];

// Napište cyklus, který projde toto pole a pro každou položku vytvoří novou epizodu uvnitř elementu episodes-list.

for (let i = 0; i < episodes.length; i++) {
  episodesElm.innerHTML += `
  <div class="episode">
    <div class="episode__num">${episodes[i][0]}</div>
    <div class="episode__body">
      <div class="episode__title">${episodes[i][1]}</div>
      <div class="episode__guest">host: ${episodes[i][2]}</div>
    </div>
  </div>
  `;
};
