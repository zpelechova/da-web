'use strict';
 
/*
1) Vytvoř základní Vue aplikaci

2) Do šablony přidej obrázek, který zobrazuje fotku ovce.

3) Do šablony přidej dvě tlačítka, "Kočka" a "Pes".
	 Když se klikne na tlačítko, zavolá se metoda, která
	 změní obrázek na kočku nebo psa.

4) Nezapomeň, že obrázek má i povinný atribut alt, takže
	 musíš měnit i ten.

5) Do šablony přidej pod obrázek ještě odstavec, do kterého
	 při kliknutí na tlačítko vepíšes vymyšlený krátký popis
	 zvířátka.

	 V textu vypíchni některá slova tučně - např. u kočky zvýrazni
	 všechny její hrozné vlastnosti. Kočky jsou záludná stvoření,
	 se sepsáním jejích špatných vlastností bys neměla mít problém.

	 Záporné vlastnosti budeš u psa hledat těžko, tak
	 zdůrazni ty hezké. Např. že je to miloučké stvoření a nejlepší
	 přítel člověka.
*/

new Vue ({
	el: '#app',
	data: {
		imgSrc: 'ovce.jpg',
		imgAlt: 'Ovce',
		desc: 'Sheep is just a totally stupid animal, but it can be your <strong> lawnmower </strong>.'
	},
	methods: {
		zmenNaKocku() {
			this.imgSrc = 'kocka.jpg'
			this.imgAlt = 'Kocka'
			this.desc = 'A cat is just <strong> wicked </strong>!'
		} ,
		zmenNaPsa() {
			this.imgSrc = 'pes.jpg'
			this.imgAlt = 'Pes'
			this.desc = 'A dog is a persons <strong> best friend </strong>. ' 
		}
	}
});

