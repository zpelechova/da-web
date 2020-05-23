// Novinky
// to dáš
// Stáhněte is připravenou webovou stránku, která zobrazuje několik zajímavých zpráv, a zobrazte ji v prohlížeči. Veškeré úkoly z tohoto cvičení proveďte v JavaScriptové konzoli.
// Pomocí document.querySelector vyberte element body a uložte si jej do proměnné bodyElm. Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
const bodyElm = document.querySelector('body');
bodyElm.style.backgroundColor = '#e9e9e9';

// Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí na bílou a maximální šířku na 60rem.
const newsElm = document.querySelector('.news');
newsElm.style.backgroundColor = 'white';
newsElm.style.maxWidth = '60rem'

// Vyberte element h1 a nastavte mu třídu na news__title. Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
const h1Elm = document.querySelector('h1')
h1Elm.className = 'news__title'
h1Elm.textContent = 'Aktuální novinky'

// Pomocí atributu id vyberte element obsahující první zprávu. Přidejte do jeho atributu class třídu post--main. První zpráva by tak měla mírně změnit svůj styl. Dejte pozor, aby na elementu zůstala i původní třída post.
const firstElm = document.querySelector('#zprava1')
firstElm.className = 'post post--main'

// Vyberte obrázek v poslední zprávě a změnte jeho atribut src na obrázek img/zprava3-novy.jpg.

const picElm = document.querySelector('#zprava3 img');
picElm.src = 'img/zprava3-novy.jpg'