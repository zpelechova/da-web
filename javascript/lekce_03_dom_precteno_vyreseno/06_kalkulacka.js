// Kalkulacka

// Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, například 2 + 3, musíme stisknout tlačíko 2, poté +, pak 3 a pak =. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme +, ale až ve chvíli, kdy mačkáme =. Musí si tedy zapamatovat, co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme =.
// Napište funkci calc se třemi vstupy num1, op a num2, které představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo. Operace může být '+', '-', '*' nebo '/'. Funkce vrátí výsledek výpočtu pro zadanou operaci.

const calc = (no1, operator, no2) => {
  if (operator === '+'){
    return no1 + no2
  } else if (operator === '-'){
    return no1 - no2
  } else if (operator === '*'){
    return no1 * no2
  } else if (operator === '/'){
    return no1 / no2
  } 
}


