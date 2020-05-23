//Email

// Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen email, který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. Pro jméno Žaneta Procházková tak vznikne adresa prochzan@fit.cvut.cz.

// Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky. Stránka poté vygeneruje emailovou adresu podle výše uvedených pravidel.

const prijmeni = (prompt('Zadejte prosím své příjmení (bez diakritiky).')).toLowerCase()
const jmeno = (prompt('Zadejte prosím své křestní jméno (bez diakritiky).')).toLowerCase()
const email = prijmeni.substring(0, 5) + jmeno.substring(0, 3) + '@fit.cvut.cz'
document.write('Váš nový email je ' + email)

