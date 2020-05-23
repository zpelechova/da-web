// Vytvořte objekt pes. Pes má vlastnosti jméno, barva srsti a délka srsti. Dále má metody stekej, zavrc a trhej. Tyto metody jen vypisují do konzole vhodný text. (U metody trhej vymyslete nějakou vtipnou hlášku.) Pracujte v konzoli.
// Svého psa si v konzoli pořádně otestujte!
const pejsek = {
  jmeno: 'pejsek Hejsek', 
barvaSrsti: 'zelená',
delkaSrsti: 'bez',
stekej: () => console.log('Haf?'),
zavrc: () => console.log('Vr vr, no.'),
trhej: function(){console.log('Chramst, Íííííííííí, chramst')}
}

pejsek.trhej()