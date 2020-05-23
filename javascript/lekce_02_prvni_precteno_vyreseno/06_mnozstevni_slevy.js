// Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. Při objednávce pod 50 kusů stojí jedno tričko 300 kč. Pokud si objednáme alespoň 50 kusů, je cena 250 kč za kus. Při objednávce nad 200 kusů je cena 200 kč za tričko. Nad 500 kusů zaplatíme 150 kč za tričko a nad 1000 kusů zaplatíme 120 korun za tričko.

// Napište program, který od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky.

let cena = ''
const pocet = Number(prompt('Zadejte pocet tricek, ktere chcete koupit:'))

if (pocet < 50) {
  cena = 300 * pocet
} else if (pocet <= 200) {
  cena = 250 * pocet
} else if (pocet <= 500) {
  cena = 200 * pocet
} else if (pocet <= 1000) {
  cena = 150 * pocet
} else {
  cena = 120 * pocet
}

document.write('Výše Vaší objednávky je ' + cena + ' Kč.')