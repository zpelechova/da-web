'use strict';

/*
Podmíněné zobrazování

1) Zobraz první odstavec podle toho, podle hodnoty vlastnosti zobrazit, kterou přidáš do dat. Může mít boolean hodnotu true nebo false.
V šaloně použij direktivu v-if.

2) Přidej tlačítko, které po kliknutí bude obracet hodnotu vlastnosti zobrazit (tj. mělo by skrývat a opět objevovat text)

3) Použij direktivu v-else a druhý odstavec skrývej, když je první vidět, a obráceně.

4) V HTML je rozbalovací roletka <select> a v ní je pět otázek. Podle toho, jaká otázka je vybraná, tak zobraz příslušné odpovědi dole pod selectem.
Použij direktivy v-if, v-else-if a v-else.
Na otázky a, b, c zobraz odpovědi A, B a C. Na poslední dvě otázky d, e (tj. když není vybrané ani a ani b ani c) zobraz poslední odstavec ("na tohle nemáme odpověď").

*/

new Vue({
	el: '#app',

	data: {
		text: true,
		value: 'a'
	},
	methods: {
		toggle() {
			this.text = !this.text
		}
	}

});