'use strict';

console.log('funguju!');

// Aplikace piškvorky

// Stáhněte si základ webové aplikace pro naše piškvorky a postupujte dle následujících kroků.

// Vytvořte funkci squareClick, která bude reagovat na kliknutí na čtverec na hracím plánu. Uvnitř této funkce získejte odkaz na element, na který bylo kliknuto, a vypište do konzole hodnotu atributu data-index.

const squareClick = () => {
  
}


// Vyberte z dokumentu všechny elementy s třídou square a na každý z nich pověste funkci squareClick jako reakci na kliknutí. Po spuštení aplikace pozorujte, zda se v konzoli po kliknutí na jeden čtverec zobrazí jeho správný index.
// Zařiďte, aby funkce squareClick kromě zobrazení indexu přidala na element čtverce CSS třídu square--cross. Po kliknutí na čtverec byste měli uvidět křížek.
// Vytvořte globální proměnnou onTurn, která obsahuje číslo 1 nebo -1 podle toho, zda je zrovna na tahu křížek nebo kolečku. Při kliknutí na čtverec zobrazte symbol, který je zrovna na tahu a nastavte proměnnou onTurn na opačný symbol. CSS Třída pro kolečko se jmenuje square--circle.
// Všimněte si, že nyní je možné táhnout na poličko, na které už bylo před tím taženo. Abyste tomu zabránili, vytvořte globální proměnnou gamePlan obsahující hrací plán nastavený na samé nuly. Pokaždé, když uživatel klikne na políčko, nastavte příslušnou hodnotu v hracím plánu na správný symbol. Dovolte táhnout pouze na ta políčka, pro které je v hracím plánu uložena nula.
// Nyní už si piškvorky můžete zahrát. Hurá!! Chybí nám však možnost, aby program sám poznal, kdo vyhrál. Zkuste se zamyslet nad tím, jak byste podle toho, co je zrovna uloženo v proměnné gamePlan rozhodli, kdo vyhrál.

// Vymyslet program tak, aby korektně rozpoznal všechny možné výherní kombinace, a zároveň neobsahoval obrovské nepřehledné množství podmínek, není jednoduchý úkol. S trochou vedení lze však vyřešt poměrně elegantně. Tuto číst si však necháme do nepovinné sekce, abychom netrápili ty, komu po tomto úkolu již piškvorky lezou i ušima.