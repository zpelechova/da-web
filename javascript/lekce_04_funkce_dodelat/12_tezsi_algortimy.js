// Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
// Vypište na výstup všechna čísla, která jsou větší než jejich předchůdce.
for(i = 1; i < numbers.length; i += 1){
  if (numbers[i] > numbers[i-1]){
    console.log(numbers[i])
  }
}

// Vypište na výstup všechny vrcholy v daném poli. Vrchol je číslo, které je větší než jeho předchůdce i jeho následovník.
for(i = 1; i < numbers.length; i += 1){
  if (numbers[i] > numbers[i-1] && numbers[i] > numbers[i+1]){
    console.log(numbers[i])
  }
}

// Nejprve spočítejte průměr čísel v poli a výsledek si ulože do proměnné mean. Poté spočítejte součet druhých mocnin vzdáleností všech čísel od průměru.
let sum = 0
for(i = 1; i < numbers.length; i += 1){
  sum += (numbers[i])
  }
const mean = (sum/numbers.length)
console.log(mean)

let sum_mocniny = 0 
for(i = 1; i < numbers.length; i += 1){
  sum_mocniny += ((numbers[i] - mean) ** 2);
  }
console.log(sum_mocniny)

// Spočítejte směrodatnou odchylku čísel v poli. To provedete tak, že nejprve spočítáte takzvaný rozptyl, což je průměr druhých mocnin vzdáleností všech čísel od průměru. Rozptyl pak odmocníte pomocí funkce Math.sqrt.
let sum = 0
for(i = 1; i < numbers.length; i += 1){
  sum += (numbers[i])
  }
const mean = (sum/numbers.length)
console.log(mean)

let sum_mocniny = 0 
for(i = 1; i < numbers.length; i += 1){
  sum_mocniny += ((numbers[i] - mean) ** 2);
  }
console.log(sum_mocniny)

const rozptyl = sum_mocniny / numbers.length
const smerodatna_odchylka = rozptyl ** 0.5

// Najděte s seznamu největší prvek.
let nejvetsi = numbers[0]
for (i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > nejvetsi) {
    nejvetsi = numbers[i]
  }
}
console.log(nejvetsi)

// Najděte s seznamu největší prvek, který je menší než číslo 16.
let nejvetsi_pod_16 = numbers[0]
for (i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > nejvetsi_pod_16 && numbers[i] < 16) {
    nejvetsi_pod_16 = numbers[i]
  }
}
console.log(nejvetsi_pod_16)