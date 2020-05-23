// Obsah elipsy

// Zlovolní zahrádkáři nám chtějí stížit výměru pozemků a proto si pořídíli pozemek ve tvru elipsy.
// Z matematiky víme, že známe-li šířku a výšku elipsy, její obsah je polovina šířky krát polovina výšky krát číslo π.
// Založte si prázdnou stránku s JavaScriptovým souborem a napište funkci ellipseArea, která spočítá plochu pozemku dle zadané šířky a výšky. Číslo π najdete v JavaScriptu v proměnné Math.PI.

const elipseArea = (height, width) => (height / 2) * (width / 2) * Math.PI;

// Maximum ze dvou čísel

// Napište funkci max2, která vrátí větší ze dvou zadaných čísel. V JavaScriptu už na toto funkce existuje, jmenuje se Math.max. Pro účely tohoto příkladu se budeme tvářit, že o ní nevíme.

const max2 = (no1, no2) => {
  if (no1 > no2) {
    return no1
  } else {
    return no2
  }
}
;

// Rámeček

// Napište funkci makeBorder, která jako vstup obdrží DOM element. Funkce nebude nic vracet, pouze předanému elementu nastaví černý rámeček tlustý 2 pixely. Vložte na stránku nějaký obsah a v konzoli vyzkoušejte, že vaše funkce funguje.

const makeBorder = (domElm) =>
  domElm.style.border = '2px black solid';

const domElm = document.querySelector('h1')