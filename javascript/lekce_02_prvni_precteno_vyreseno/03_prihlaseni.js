// Založte si webovou stránku, na které necháte uživatele zadat svoje uživatelské jméno a poté heslo. Pokud se heslo shoduje s heslem simsalabim, vypište na výstup Smíš vstoupit.
// Upravte stránku tak, aby vypsala Vstup nepovolen, pokud uživatel zadá špatné heslo.
// Upravte dále program tak, že pokud uživatel zadá správné heslo, stránka se ho ještě zeptá na věk a pustí jej dál pouze pokud je starší 18 let. Pokud uživatel zadá heslo špatně, už se ho na věk neptejte.

const jmeno = prompt('Zadejte uzivatelske jmeno.');
const heslo = prompt('Zadejte heslo.');
if (heslo === 'simsalabim') {
  const vek = Number(prompt('Zadejte svuj vek.'))
  if (vek >= 18) {
    document.write('Smis vstoupit!')
  } else {
    document.write('Na tohle jsi ještě malej.')
  }
} else {
  document.write('Vstup nepovolen.')
}