// Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
// Vypište na výstup všechna čísla.
for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])
}

// Vypište na výstup druhé mocniny všech čísel.
for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i] ** 2)
}

// Vypište na výstup pouze záporná čísla.
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < 0) {
    console.log(numbers[i])
  }
}

// Vypište na výstup absolutní hodnotu všech čísel.
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < 0) {
    console.log(-numbers[i])
  } else console.log(numbers[i])
}

// Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 3 === 0) {
    console.log(numbers[i])
  }
}

// Vypište na výstup pouze sudá čísla.
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i])
  }
}

// Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.
for (i = 0; i < numbers.length; i += 1) {
  console.log(Math.abs(numbers[i] - 5))
}

// Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.
for (i = 0; i < numbers.length; i += 1) {
  console.log(Math.abs(numbers[i] - 5) ** 2)
}

// Spočítejte, kolik je v seznamu záporných čísel.
const minus = [];
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < 0) {
    minus.push(numbers[i])
  }
}
console.log(minus.length)

// Spočítejte součet všech čísel v poli.
let sum = 0;
for (i = 0; i < numbers.length; i += 1) {
  sum += (numbers[i])
};
console.log(sum);

// Spočítejte průměr všech čísel v poli.
let sum = 0;
for (i = 0; i < numbers.length; i += 1) {
  sum += (numbers[i])
};
console.log(sum / numbers.length);

// Spočítejte součet všech pozitivních čísel v poli.
let sum = 0
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 0) {
    sum += numbers[i]
  }
}
console.log(sum)