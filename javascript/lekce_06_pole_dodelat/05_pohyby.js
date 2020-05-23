// Mějme záznam vkladů a výběrů na nějakém bankovním účtu.

const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300];
// Napište cyklus FOR, který spočítá výsledná zůstatk na účtu za předpokladu, že na účtu byla na začátku nula.
let zustatek = 0
for (i = 0; i < amounts.length; i += 1){
  zustatek += amounts[i]
}
console.log(zustatek)

// Napište cyklus WHILE, který zjistí číslo pohybu, ve kterém se účet dostal poprvé do mínusu. Vypište jak číslo pohybu, tak výši záporného zůstatku.
let i = 0
while (i < amounts.length){
  zustatek += amounts[i]
  if (zustatek < 0){
    console.log('První minusový výskyt je ' + zustatek + ' na indexu ' + i)
// přidávám break, aby se cyklus zastavil po prvnim vyskytu minusove hodnoty
    break
  }
  i += 1
}