// Vytvořte webovou stránku, která pomůže zaměstnavatelům spočítat náklady na jednoho zaměstnance, tedy takzvenou superhrubou mzdu. Zaměstnavetel zadá na vstupu dvě hodnoty: hodinovou sazbu zaměstnance a velikost úvazku v procentech. Tedy například 100% je plný úvazek (8 hodině denně), 50% poloviční apod. Stránka vypíše výši superhrubé mzdy, výší hrubé mzdy a výší čisté mzdy, vše v korunách.

// Pravidla pro tyto výpočty se v čase mění. Aktuální pravidla v době vzniku tohoto cvičení platí od 1.7.2019 a jsou následující (zdroj).

// Hrubou mzdu spočítáme z hodinové sazby a velikosti úvazku. Předpokládejme, že každý měsíc má 21 pracovních dní. Výsledné číslo zaokrouhlíme běžným způsobem na celé koruny.

// Superhrubá mzda se spočítá z hrubé mzdy takto:

// Přičteme náklady na zdravotní pojištění (9 % z hrubé mzdy)
// Přičteme náklady na sociální pojištění (24,8 % z hrubé mzdy)
// Výsledné číslo zaokrouhlíme nahoru na celé koruny.
// Čistá mzda se spočítá z hrubé mzdy takto:

// Odečteme 4,5 % hrubé mzdy jako zdravotní pojištění, které platí zaměstnanec,
// Odečteme 6,5 % hrubé mzdy jako sociální pojištění, které platí zaměstnanec,
// Spočítáme daňový základ tak, že superhrubou mzdu zaokrouhlíme na stovky nahoru…
// Odečteme daň z příjmu, která činí 15% z daňového základu.
// Přičteme 2070 jako základní slevu na dani, na kterou má nárok každý.
// Výsledek zaokrouhlíme dolů na celé koruny.
// Příklad: Celkové náklady na mzdu zaměstnance z hodinovou sazbou 450 Kč/h a 70% úvazkem jsou 70 807 Kč. Hrubá mzda činí 52 920 Kč a čistá mzda 38 533 Kč. Své výpočty můžete ověřit například na této stránce. Bude nám stačit už pouze jedna lekce, abyste takovou stránku dokázali vyrobit úplně sami.

const sazba = Number(prompt('Zadejte hodinovou mzdu:'))
const uvazek = Number(prompt('Zadejte výši úvazku v procentech:'))

const hruba_mzda = sazba * 8 * 21 * uvazek / 100

const zdrav_pojisteni = 9 / 100 * hruba_mzda

const soc_pojisteni = 24.8 / 100 * hruba_mzda

const superhruba_mzda = Math.ceil(hruba_mzda + zdrav_pojisteni + soc_pojisteni)

const danovy_zaklad = Math.ceil(superhruba_mzda * 100) / 100

const dan_z_prijmu = 15 * danovy_zaklad / 100 - 2070

const cista_mzda = Math.floor(hruba_mzda - 0.045 * hruba_mzda - 0.065 * hruba_mzda - dan_z_prijmu)

document.write('Superhruba mzda je ' + superhruba_mzda + ' Kč' + ', hrubá mzda je ' + hruba_mzda + ' Kč a čistá je ' + cista_mzda + ' Kč.')