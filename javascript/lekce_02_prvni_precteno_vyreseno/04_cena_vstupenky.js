// Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla. Nechte uživatele zadat svůj věk. Vytvořte si proměnnou plnaCena, do které uložte hodnotu 12. Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou podle věku uživatele dle následujících pravidel

// 0 euro pro návštěvníky mladší 6 let,
// 65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
// 100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
// 50 % ze základní ceny pro ostatní (senior).
// Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých centech.

// Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.

const vek = Number(prompt('Zadejte vek divaka:'))
const plna_cena = 12;
let cena = ''
if (vek < 6) {
  cena = 0
} else if (vek < 27) {
  cena = plna_cena / 100 * 65
} else if (vek < 65) {
  cena = plna_cena
} else {
  cena = plna_cena / 2
}
document.write('Cena Vaší vstupenky je ' + Math.round(cena) + ' Eur')