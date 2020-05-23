// prestupny rok 1, 2, 3

// 1. Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv. Letopočet je přestupný, pokud je dělitelný čtyřmi. Roky, které jsou dělitelné 100 jsou ovšem přestupné pouze tehdy, jsou-li zároveň dělitelné 400.

// 2.Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv. Pro výpis použijte funkci document.write. Její volání se však ve vašem kódu smí objevit pouze dvakrát.

// 3. Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv. Pro výpis použijte funkci document.write, jejíž volání se ve vašem kódu smí objevit pouze dvakrát. Zároveň v kódu nesmíte použít víc než dva logické operátory.

const rok = Number(prompt('Napište rok, který chcete ověřit:'))
let prestupny = ''

if (rok % 100 === 0) {
  if (rok % 400 === 0) {
    prestupny = 'je prestupny.'
  } else {
    prestupny = 'neni prestupny.'
  }
} else if (rok % 4 === 0){
  prestupny = 'je prestupny.'
} else {
  prestupny = 'neni prestupny.'
}

document.write('Vámi vybraný rok ' + prestupny)
