'use strict';
/*
	Vytvořte generátor uživatelem vybraného typu smajlíku.

	Podle toho, co uživatel vybere, se změní typ smajlíku.
	Barva vybírá barvu, rámeček povoluje a zakazuje rámeček 
	a smajlík bude buď veselý nebo smutný.

	1.) Formulářová políčka provažte s vlastnostmi objektu data. 
	Objekt "data" již máte předpřipravený. 

	2.) Zařiďte, aby smajlík reagoval na hodnoty vybrané ve formulářích.
*/

new Vue({
	el: '#app',

	data: {
		typ: 'vesely',
		barva: '',
		ramecek: false
	}

});