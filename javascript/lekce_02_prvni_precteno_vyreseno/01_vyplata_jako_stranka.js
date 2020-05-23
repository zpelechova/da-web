// Výplata jako stránka
// Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a spočítá jeho hrubou mzdu za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci. Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
// Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi.

const hours = Number(prompt("Zadejte prosím počet hodin, které denně pracujete:"))
const days = Number(prompt("Zadejte prosím počet dní, které měsíčně pracujete"))
const money = Number(prompt("Zadejte prosím svou hodinovou mzdu"))
const salary = money * days * hours
document.write("Váš měsíční příjem je " + salary + ' Kč')
