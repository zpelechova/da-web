// Založte si JavaScriptový program a zkopírujte si do něj datovou strukturu kurzu Úvod do programování z textu výše.
const course = {
  nazev: 'Úvod do programování',
  lektor: 'Martin Podloucký',
  konani: [
    {
      misto: 'T-Mobile',
      koucove: ['Dan Vrátil', 'Filip Kopecký', 'Martina Nemčoková'],
      ucastnic: 30,
    },
    {
      misto: 'MSD IT',
      koucove: ['Dan Vrátil', 'Zuzana Tučková', 'Martina Nemčoková'],
      ucastnic: 25,
    },
    {
      misto: 'Škoda DigiLab',
      koucove: ['Dan Vrátil', 'Filip Kopecký', 'Kateřina Kalášková'],
      ucastnic: 41,
    },
  ],
};
// Vypište do konzole počet účastnic na posledním konání kurzu.
course.konani[2].ucastnic
// Vypište do konzole jméno posledního kouče na prvním konání kurzu.
course.konani[0].koucove[2]
// Vypište do konzole celkový počet konání kurzu.
course.konani.length
// Pomocí cyklu vypište na výstup všechna místa, na kterých se kurz konal.
for (i = 0; i < course.konani.length; i++) {
  console.log(course.konani[i].misto)
}