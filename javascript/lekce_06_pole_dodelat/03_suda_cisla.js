// Napište cyklu WHILE, který vypíše do konzole prvních deset sudých čísel počínaje nulou.

let i = 0;
while (i <= 10){
  console.log('i = ' + i )
  i += 2
}

// Přepište váš kód jako cyklus FOR.

for (let i = 0; i <= 10; i += 2){
  console.log('i = ' + i )
}

// Vypište sudá čísla pozpátku, tedy tak, abychom nulou skončili.

for (let i = 10; i >= 0; i -= 2){
  console.log('i = ' + i )
}
