// Stáhněte si základ aplikace pro kuchyňskou minutku. Využijte funkci setTimeout ke splnění následujících úkolů.

// Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.
// Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.
// Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. Prohlíč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval. Tento nedostatek odstraníme na konci lekce.

const bulbElm = document.querySelector('.bulb');
bulbElm.classList.add('bulb--off');


const light = (event) => {
  bulbElm.classList.toggle('bulb--on');
};

bulbElm.addEventListener('click', light);

