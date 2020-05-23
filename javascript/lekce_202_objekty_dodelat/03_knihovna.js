// Uvažte, jak byste pomocí objektu reprezentovali údaje o knize v knihovně. Jaké klíče a hodnoty bude objekt obsahovat? Zcela jistě bude každá kniha obsahovat například název. Chtěli bychom však také, aby kniha umožňovala mít vícero autorů a vícero vydání.
// Ve JavaScriptovém programu vytvořte proměnnou obsahující pole, které bude obsahovat několik vašich oblíbených knih.
// Vytvořte jednoduchou HTML stránku se ol seznamem. Použijte vlastnost innerHTML a pomocí cyklu naplňte tento seznam názvy vašech knih.

const knihy = [{
  titul: "Harry Potter a kámen mudrců",
  anotace: "Uplne nejznamejsi kniha na svete hned po bibli. Zatim.",
  autor: ["J.K.Rowling"],
  rokVydani: [1993, 1997, 2005, 2011, 2019],
  pocetStran: 357,
  cena: [{
    vazana: 279,
    brozovana: 178,
    luxusni: 582
  }]
},
{
  titul: "Malenka",
  anotace: "Fakt hodně hustá kniha o adoptované holce.",
  autor: ["Dita Táborská", "Magdalena Křížová"],
  rokVydani: [2017],
  pocetStran: 397,
  cena: [{
    vazana: 279,
    brozovana: 178,
    ekniha: 99
  }]
},
{
  titul: "Lapuťák a kapitán Adorabl",
  anotace: "Už nám hraje nosntop měsíc v autě.",
  autor: ["Daniel Landsman", "Moderní Fotr"],
  rokVydani: [2017, 2018],
  pocetStran: 657,
  cena: [{
    vazana: 399,
    audiokniha: 255
  }]
}
]

const seznamElm = document.querySelector("#seznamKnih");

for (i = 0; i < knihy.length; i++) {
seznamElm.innerHTML += "<li>" + knihy[i].titul + "</li>"
} 
//nebo poslední řádek lépe: seznamElm.innerHTML += `<li>  ${knihy[i].titul}  </li>`
