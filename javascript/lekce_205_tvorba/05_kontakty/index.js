// Vytvořte webovou stránku, která zobrazuje seznam kontaktů. U každého kontaktu bychom chtěli evidovat jméno, příjmení, email a telefonní číslo.

// Založte webovou aplikaci se soubory index.html, style.css a index.js.
// Do hlavičky souboru index.html vložte odkaz na Handlebars šablony.
// <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js"></script>
// Uvnitř index.js si vytvořte pole objektů, které bude obsahovat jenotlivé kontakty.
// Uvnitř index.html vytvořte šablonu pro jeden kontakt. Také vytvořte div, do kterého dubeme později naše kontakty vkládat.
// V souboru index.js si zkompilujte Hanldebars šablonu pro jeden kontakt.
// Vytvořte funkci renderContact, jejíž vstupem bude objektu kontaktu a výstupem DOM element vyrobený z vaší šablony.
// Pomocí cyklu projděte všechny konsakty a zapojte je do stránky.
// Nepovinně si můžeme pohrát se stylováním. U každého kontaktu se nám například může hodit takováto hezká ikonka.

kontakty = [
  {
    'jméno': 'Zuzana',
    'příjmení': 'Pelechová',
    'email': 'zpelechova@gmail.com',
    'telefon': 7749675351
  },
  {
    'jméno': 'Jana',
    'příjmení': 'Šímová',
    'email': 'simovi@gmail.com',
    'telefon': 6029675353
  },
  {
    'jméno': 'Kristýna',
    'příjmení': 'Paloušová',
    'email': 'backyard@gmail.com',
    'telefon': 777749008
  },
  {
    'jméno': 'Petr',
    'příjmení': 'Štěpánek',
    'email': 'peste@gmail.com',
    'telefon': 772098922
  },
]

const contactTemplate = Handlebars.compile(
  // tady vybírám element, ve kterem je template
  document.querySelector('#contacts-template').innerHTML
);

const renderContact = (contact) => {
  const helperELm = document.createElement('div');
  helperELm.innerHTML = contactTemplate(contact);
  return helperELm.children[0];
};

for (let c = 0; c < kontakty.length; c++) {
  //tady vybírám element, do kterého chci ten div přidat
  const contactListElm = document.querySelector('.kontakty');
  const elm = renderContact(kontakty[c]);
  contactListElm.appendChild(elm);
}