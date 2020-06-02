'use strict';
/*
V CSS jsou připravené CSS třídy cerveny, zeleny, modry.

1) přidej jednu z tříd na první čtvereček pomocí v-bind:class

2) Vytvoř si v datech vlastnost aktivni. Na druhý čtvereček nastav jednu z barevných tříd ve chvíli, kdy je hodnota aktivni === true.

3) Přidej na čtvereček událost při kliknutí, která bude měnit hodnotu vlastnosti aktivni. Tj. klikání na čtvereček ho bude obarvovat nebo odbarvovat.

4) Vyzkoušej si další způsoby, jak přidávat třídy dynamicky, např.:
		- vytvoř textové pole, které bude přes v-model svázané s nějakou proměnnou
		- na čtvereček nastavuj třídu, jejíž název napíše uživatel do pole

*/

new Vue({
	el: '#app',
	data: {
		aktivni: true,
		modry: true,
		trida: '',
	},
	methods: {
	toggle() {
		this.modry = !this.modry
	}
}
});