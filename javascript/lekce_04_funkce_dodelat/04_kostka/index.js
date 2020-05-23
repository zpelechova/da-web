// Stáhněte si základ stránky, která zobrazuje hrací kostku. Doplňte do stránky JavaScriptový program, který zařídí, že když uživatel zmáčkne na stránce mezerník, na kostce se zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.

// Rozumným postupem je vytvořit si proměnnou side, která bude obsahovat číslo strany kostky. Tuto proměnnou můžete vždy při stisknutí mezerníku navýšit o jedna a z této hodnoty zkonstruovat řetězec pro atribut src.


const diceElm = document.querySelector('.dice')
let side = 1

const changeImg = () => {
  if (side === 6) {
    side = 1
  } else {
    side += 1
  }diceElm.src = `http://127.0.0.1:5500/lekce_04_funkce_dodelat/04_kostka/img/side${side}.svg`
};
 
document.addEventListener('keypress', (event) => {
  if (event.code === 'Space') {
    console.log('space');
    changeImg()
  }
});
