// Ruleta

// Na obrázku vidíte rozložení čísel na klasické Francouzské ruletě. Ruleta obsahuje čísla 0 - 36. Každé číslo s výjimkou nuly je buď sudé nebo liché a zároveň červené nebo černé. Pro čísla 1 až 10 a 19 až 28 platí, že lichá čísla jsou červená a sudá jsou černá. Pro zbytek platí obrácené pravidlo, tedy lichá jsou černá a sudá červená. Nula není ani lichá ani sudá, ani černá ani červená.
// Vytvořte stránku, které uživatel zadá číslo a stránka odpoví jestli jde o číslo sudé nebo liché, černé nebo červené, nebo je to nula.

const cislo = Number(prompt('Napište číslo od 0 do 36.'))
let vysledek = ''

if (cislo === 0){
  vysledek = 'zelena nula'
} else if (cislo <= 10 || (cislo >= 19 && cislo <= 28)){
  if (cislo % 2 === 0){
    vysledek = 'suda cerna'
  } else{
    vysledek = 'licha cervena'
  }
} else if ((cislo > 10 && cislo < 19) || cislo > 28){
  if (cislo % 2 === 0){
    vysledek = 'suda cervena'
  } else{
    vysledek = 'licha cerna'
  }
}

document.write('Vaše cislo je ' + vysledek + '.')