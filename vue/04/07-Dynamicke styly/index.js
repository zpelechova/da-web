'use strict';
/*
Ukaž, jak nastavovat na elementech styl napřímo přes v-bind:style

1) pomocí objektu přímo v šabloně

2) pomocí objektu sestaveném v javascriptu

3) Přidej textové pole, do kterého půjde napsat barva (anglické názvy HTML barev), tuto barvu pak nastav jako barvu pozadí na čtvereček.

4) Přidej textové pole, do kterého půjde napsat velikost textu (číslo). Tuto velikost pak nastav jako velikost písma odstavci. Nezapomeň, že musíš připojit za číslo i jednotky (např. px).
*/

new Vue({
	el: '#app',
	data: {
		barva: 'purple',
		velikost: 42
	}
});