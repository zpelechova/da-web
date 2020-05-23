// Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

  const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
// Vypište na výstup délku nejdelší rostoucí sekvence čísel, které v poli následují přímo po sobě.
let sekvence = [numbers[0]]
let delka = []
for (i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > numbers[i - 1]) {
    sekvence.push(numbers[i])
  } else {
    delka.push(sekvence.length)
    sekvence = []
  }
}

let nejdelsi = delka[0]
for (i = 1; i < delka.length; i += 1) {
  if (delka[i] > delka[i - 1]) {
    nejdelsi = delka[i]
  }
}

console.log(nejdelsi)

// Vypište na výstup délku nejdelší rostoucí nebo klesající sekvence čísel, které v seznamu následují přímo po sobě.
let sekvence = [numbers[0]]
let delka = []
for (i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > numbers[i - 1]) {
    sekvence.push(numbers[i])
  } else {
    delka.push(sekvence.length)
    sekvence = []
  }
}
sekvence = numbers[0]
for (i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < numbers[i - 1]) {
    sekvence.push(numbers[i])
  } else {
    delka.push(sekvence.length)
    sekvence = []
  }
}

let nejdelsi = delka[0]
for (i = 1; i < delka.length; i += 1) {
  if (delka[i] > delka[i - 1]) {
    nejdelsi = delka[i]
  }
}

console.log(nejdelsi)


// Najděte druhý největší prvek v seznamu.
let max1 = numbers[0];
let max2 = numbers[1]
for (i = 2; i < numbers.length; i += 1) {
  if (numbers[i] > max2) {
    if (numbers[i] > max1) {
      max2 = max1
      max1 = numbers[i]
    } else {
      max2 = numbers[i]
    }
  }
};
console.log(max1, max2)

// Najděte nejnižší vrchol a nejvyšší údolí. Údolí je číslo, které je menší než jeho předchůdce i následovník.
const vrchol = [];

for (i = 1; i < numbers.length; i++){
  if (numbers[i] > numbers [i-1] && numbers[i] > numbers [i+1]){
    vrchol.push(numbers[i])
  }
}

let nejvyssi = vrchol[0]
for (i = 1; i < vrchol.length; i++){
  if (vrchol[i] > vrchol[i-1]){
    nejvyssi = vrchol[i]
  }
}

const udoli = [];

for (i = 1; i < numbers.length; i++){
  if (numbers[i] < numbers [i-1] && numbers[i] < numbers [i+1]){
    udoli.push(numbers[i])
  }
}

let nejnizzsi = udoli[0]
for (i = 1; i < udoli.length; i++){
  if (udoli[i] > udoli[i-1]){
    nejnizsi = udoli[i]
  }
}

console.log( 'nejnižší je ' + nejnizsi + ' a nejvyšší je ' + nejvyssi)