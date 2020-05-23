// Celé toto cvičení prováďejte v JavaScript konzoli.
// Vytvořte nějaké pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních. Použije metodu push a přidejte do pole počet diváků na novém představení.
// Vytvořte nějaké pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních.
// Vytvořte nějaké pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje. Uložte tento seznam do proměnné plays. Uložte do nějaké proměnné druhou položku tohoto pole. Pomocí metody shift odstraňte z pole první představení, které už divadlo nehraje.
// Do proměnné reviews uložte pole hodnocení, které obdržela divadelní hra Plyšáci na útěku v různých recenzních časopisech. Hodnocení je vždy dvouprvkové pole obsahující název recenzního časopisu jako řetězec a samotné hodnocení jako číslo mezi 1 až 10. Pomocí metody unshift přidejte na začátek nové hodnocení z časopisu Divadelní oběžník.

const divaci = []
divaci.push(30)
divaci.push(80)
divaci.push(880)
divaci.push(70)
const plnost = [29.3, 3.5, 90.4, 17.2]
const plays = ['Godot', 'Cy\rano', 'Myš', 'Kočka']
const dnes = plays[1]
plays.shift()
const reviews = [['kino', 98],['cinema', 70],['mujSvet', 87.5]]
reviews.unshift(['Divadelní oběžník', 83])