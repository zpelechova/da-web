// Výplata

// Spočítejte svůj měsíční příjem víte-li, že pracujete 7 hodin denně se mzdou 250 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.
// Uložte si počet pracovních hodin za den do proměnné hodin, hodinovou mzdu do proměnné mzda a počet pracovních dní do proměnné dni. Spočítejte svou výplatu s použitím těchto proměnných.
// Pokud pracujete na živnostenský list, můžete si odečíst 60% příjmů jako paušál a ze zbytku zaplatíte 15% daň. Uložte si tyto hodnoty do proměnných pausal a dan a spočítejte svůj příjem po zdanění.

const hodin = 7;
const dni = 21;
const mzda = 250;
const vyplata = hodin * dni * mzda;
const pausal = vyplata * 0.60;
const dan = (vyplata - pausal) * 0.15;
const prijem = vyplata - dan;
console.log(prijem)


// Ultramaraton

// Představme si, že jste pořadatelé ultramaratonského závodu. Závod začiná ve tři hodiny odpoledne, což ve 24-hodinovém formátu zapíšeme jako 15. Nejlepší běžec zvládne vaši brutální trasu za 10 hodin. Doběhne tedy v jednu hodinu ráno, v našem formátu zapsáno jako 1.
// Uložte si čas startu závodu do proměnné start. Do proměnné delka si uložte délku závodu pro nějakého běžce. Klidně může být pomalejší než náš šampion. Do proměnné konec spočítejte, v kolik hodin závod pro našeho běžce skončí. Vyzkoušejte různé délky a ověřte, že váš postup funguje.

const start = 15
const delka = 10
const konec = (delka + start) % 24

// Příjem divadla

// Jeden lístek do divadla Pěst na oko stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem.
// Divadlo se rozhodlo prodávat studentské vstupné ve výši 65% plného vstupného. Jak se změní měsíční příjem divadla pokud víme, že 40% návštěvníků jsou studenti?

const listek = 12;
const navstevniku = 174;
const predstaveni = 15;
const prijem = listek * navstevniku * predstaveni;
const studentsky_listek = listek * 0.65
const novy_prijem = ((navstevniku * 0.60) * listek * predstaveni) + ((navstevniku * 0.40) * studentsky_listek * predstaveni)  

//Uroky
// Fíha banka a.s. nabízí na svých stránkách spořící účet s úrokem 2,4%. Když si na takový účet uložíte 1 000 000 kč, kolik peněz nastřádáte za 10 let?

const vklad = 1000000
const urok = 1.024
const za_10_let = vklad * urok ** 10

// Novy koberec

// Do pokoje o tvaru čtverce a rozloze 30m2 potřebujeme koupit nový koberec. Jakou délku má mít strana koberce? Vejde se nám srolovaný do dodávky s nákladovým prostorem dlouhým 5m?

const podlaha = 30
const strana = podlaha ** 0.5
strana <= 5


// Delka filmu

// V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu Pán prstenů: Dvě věže trvá 223 minut. My bychom ovšem délku filmu raději věděli v hodinách a minutách. Za použití funkcí a operátorů z této lekce spočítejte, kolik hodin a minut trvá film Pán prstenů: Dvě věže.

// Uložte si vypočtené minuty a hodiny do rozumě pojmenovaných proměnných. Za pomocí těchto proměnných sestavte řetězec, který bude vypada takto: 'Pán prstenů: 2h 30min'

const vychozi_delka = 233;
const hodin = Math.floor(vychozi_delka / 60);
const minut = vychozi_delka % 60;
console.log('Film trvá ' + hodin + ':' + minut + '.');

// Schopnejsi zaokrouhlovani

// Představte si, že máme v proměnné se jménem x uloženo nějaké desetinné číslo. Pomocí funkce Math.round jej můžeme zaokrouhlit na celá čísla takto: Math.round(x)
// Co kdybychom však chtěli zaokrouhlit na desetiny, setiny nebo třeba celé stovky?
// Sestavte s pomocí funkce Math.round výraz, který zaokrouhlí číslo x s přesností na desetiny.
Math.round(2.34*10)/10
// Sestavte výraz, který zaokrouhlí číslo x s přesností na setiny.
Math.round(2.345*100)/100
// Sestavte výraz, který zaokrouhlí číslo x s přesností na celé stovky.
Math.round(2345/100)*100

// Házení kostkou
// Vymyslete jak použít funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. Sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6. Zajistěte, že všechna čísla mají skutečně stejnou pravděpodobnost padnutí.
Math.floor((Math.random() * 6) + 1)

// Schopnejsi zaokrouhlovani 2

// Představte si, že máme v proměnné se jménem x uloženo nějaké desetinné číslo a v proměnné k údaj na kolik cifer chceme zaokrouhlovat. Například k=3 znamená, že chceme zaokrouhlit na tisíciny. Naopak k=-2 znamená, že zaokrouhlujeme na celé stovky. Hodnota k=0 tedy znamená běžné zaokrouhlování na jednotky.

// Sestavte s pomocí funkce Math.round výraz, který zaokrouhlí číslo x na zadaný počet cifer k.

let k = 0
const number = 13472.347865
Math.round(number * 10 ** k) / 10 ** k