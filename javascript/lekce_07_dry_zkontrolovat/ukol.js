// pozn. k vypracování: vše (pozdravy, čísla, apod.) vypisujte do konzole

// 1.
// napiš funkci pro uvítacího robota, která pozdraví neznámého hosta (tj. zdraví všechny stejně)
const pozdrav1 = () => {
  console.log('Cau lidi!')
}

// 2.
// napiš funkci pro uvítacího robota, která pozdraví známého hosta (jako parametr jí předáš jeho jméno)
// pozn. představte si, že jsme na Slovensku, a jména nebudeme skloňovat
const pozdrav2 = (jmeno) => {
  console.log(`Cau lidi, cau ${jmeno}`)
}

// 3.
// napiš funkci, která jako parametr vezme třídu nějakého html elementu a nastaví písmo v něm na barvu 'hotpink'
const doRuzova = (clas) => {
  const classElm = document.querySelector(`.${clas}`)
  classElm.style.color = 'hotpink'
}

// 4.
// napiš funkci, která jako parametr vezme pole, podívá se na jeho první a poslední prvek a porovná je.
// Pokud jsou stejné, vrátí true, jinak vrátí false
// pozn. co když bude pole prázdné? zamyslete se ... lze to nějak ošetřit?
let array = [2, 3, 4, 5,4 ,6]
const compare = (array) => {
  const prvni = array[0]
  const posledni = array[array.length - 1]
  if (prvni === '' || posledni === '') {
    return 'Bacha vole prázdný pole.'
  } else if (prvni === posledni) {
    return true
  } else {
    return false
  }
}
//ale nefunguje mi prazdny znak, i kdyz dela neco jineho, nez jsem mela udelat, jak ted vidim

// 5.
// napiš for cyklus, který vypíše všechna sudá čísla od dvacítky do nuly
for (i = 20; i >= 0; i = i - 2) {
  console.log(i)
}


// 5.
// napiš while cyklus, který vypíše všechna sudá čísla od dvacítky do nuly
i = 20
while (i >= 0){
  console.log(i)
  i = i-2
}


// 6.
// napiš funkci, která vezme dva parametry (čísla, první z nich je menší než druhé) a vypíše všechna čísla mezi nimi
// příklad: vypisVsechnaCislaMezi(4,9); vypíše 5,6,7,8 
// pozn. co když se spletu a zadám první číslo větší?
const mezicisla2 = (mensi, vetsi) => {
  for (i = mensi+1; i < vetsi; i++){
    console.log(i)
  }
}
// tak cyklus neproběhne?

