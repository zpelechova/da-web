// Založte JavaScriptový program a splňte následující úkoly.
// // Váš program nechť hází kostkou tak dlouho, až poprvé padne šestka. Vypište na výstup na kolikátý pokus šestka padla.
// let hod = () => Math.ceil(Math.random() * 6);
// let posledni = hod()
// let hody = []
// while (posledni != 6) {
//   posledni = hod()
//   console.log(posledni)
//   hody.push(posledni)
// }
// console.log('Šestka padla na ' + hody.length + '. pokus.')

// // Spusťte váš program desetkrát za sebou a zaznamenejte výsledky. Sdílejte vaše výsledky s ostatními abychom nasbírali co nejvíce dat.

// let hod = () => Math.floor((Math.random() * 6) + 1);
// let posledni = 0
// let hody = []
// let sestka = []
// for (i = 1; i <= 10; i += 1) {
//   while (posledni != 6) {
//     posledni = hod()
//     console.log(posledni)
//     hody.push(posledni)
//   }
//   sestka.push(hody.length)
//   console.log('Šestka padla na ' + hody.length + '. pokus.')
//   posledni = 0
//   hody = []
// }
// console.log(sestka)

let hod = () => Math.floor(Math.random() * 6 + 1);
let posledni = 0
let hody = 0
let sestka = []
for (i = 1; i <= 10; i += 1) {
  while (posledni != 6) {
    posledni = hod()
    hody += 1
  }
  sestka.push(hody)
  posledni = 0
  hody = 0
}
console.log(sestka)