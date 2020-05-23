// 1. Napiš funkci, která zjistí, zda je návštevník v baru plnoletý.
// Funkce bere jeden parametr (věk) a vrací řetězec informující o výsledku.
let vek = 23;
console.log(jePlnolety(vek));
const jePlnolety = (vek) => {
	if (vek >= 18) {
		return "Jsi dospělý."
	} else {
		return "Jsi dítě."
	}
}


let vek = 23;
let plnolety = true;
const jePlnolety = (vek) => {
	if (vek >= 18) {
		plnolety = false;
	};
};

// 2. Napiš funkci, která otestuje, zda je osoba muž (M) nebo žena (Z).
let pohlavi = 'Z';
const coJsi = (pohlavi) => {
	if (pohlavi === 'M') {
		return 'Muž';
	} else if (pohlavi === 'Z') {
		return 'Žena';
	} else {
		return 'Originál';
	};
};
console.log(coJsi(pohlavi));

// 3. Představ si, že žiješ na Měsíci. Teploty se tam pohybují
// od -173°C do +127°C. Než vylezeš z domu, zjisti nejdřív,
// zda je venku teplota vhodná na kraťasy a tričko s krátkým
// rukávem, tj. teplota mezi 20°C a 38°C.
// Protože máš na měsíci hodně kolegů, připrav pro ně funkci (která tohle otestuje), 
// aby nemuseli psát kód pokaždé znovu.
let teplota = 28;

const ifShorts = (temperature) => {
	if (temperature >= 20 && temperature <= 38) {
		return true
	} else {
		return false
	}
}

// 4. Napiš funkci, která zjistí, zda je daná osoba dospělá žena, která může řídit.
// Funkce bere dva parametry, osobu a aktuální rok.
let osoba = {
	jmeno: 'Ema',
	pohlavi: 'Z',
	rokNarozeni: 1992,
	ridicak: true
};
let aktualniRok = 2019;

const drivingFemale = (person, year) => {
	if (person.pohlavi === 'Z' && (year - person.rokNarozeni) >= 18) {
		return true
	} else {
		return false
	}
}

// 5. Podle věku napiš, o jakého člověka jde:
// 0-5 miminko
// 6-18 dítě
// 19 - 65 dospělý
// 66 a víc - důchodce
let vek = 23;

const whatPerson = (age) => {
	if (age <= 5) {
		return 'miminko';
	} else if (age <= 18) {
		return 'dítě';
	} else if (age <= 65) {
		return 'dospělý';
	} else {
		return 'důchodce';
	};
};


// 6. Moje oblíbené ovoce jsou jahody, melouny nebo hrušky.
// Řekni mi, zda si dnes zamlsám!

let ovoce = ['jablko', 'hrozny', 'maliny', 'borůvky']
const favouriteFruit = ['jahody', 'melouny', 'hrušky']
let zamlsas = 'ne'
for (i = 0; i < favouriteFruit.length; i++) {
	if (favouriteFruit[i] === ovoce) {
		zamlsas = 'ano'
	}
}

// Pro pokročilé - troufneš si to napsat pomocí hledání v poli, ve kterém bude uloženo, jaké ovoce mám rád?
for (f = 0; f < favouriteFruit.length; f++) {
	for (o = 0; o < ovoce.length; o++) {
		if (favouriteFruit[f] === ovoce[o]) {
			zamlsas = 'ano'
		}
	}
};

// 7. Pro mírně pokročilé
// Napiš funkci, která jako parametr bere třídu id nějakého html prvku, a přidá mu třídu "active".
// Pozor, prvek už může nějaké třídy mít!

const addActive = (id) => {
	const idElm = document.getElementById(id);
	idElm.classList.add('active');
};

// 8. Pro pokročilé.
// Napište posluchač události, který bude zachycovat událost "click" na celém dokumentu (pověste ho na "document.body"). 
// Událost si uložte do parametru event a vypište ji do konzole. Prohlédněte si celý vypsaný objekt a popřemýšlejte, 
// co znamenají jeho jednotlivé vlastnosti. Mimojiné se zaměřte na vlastnost clientX a clientY. Zkuste pomocí googlu
// zjistit, co přesně znamenají (např. na MDN tuhle informaci určitě najdete.)
// Pro super pokročilé: Dokážete z objektu události zjistit, kterým tlačítkem bylo kliknuto? (Pomůže opět google.)

document.body.addEventListener('click', console.log); 