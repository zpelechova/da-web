// Vytvořte objekt profil, který obsahuje data potřebná k seznamování na seznamce. V našem případě to bude jméno, barva vlasů, barva očí a oblíbený drink na prvním rande.
// Přidejte do objektu metodu, která do konzole vypíše text seznamovacího inzerátu. Text bude obsahovat všechna data z objektu, tedy jméno, obě barvy a oblíbený drink. Používejte klíčové slovo this. Udělejte to chytře, abyste se vyhnuli skloňování.
// Opět si to otestujte v konzoli!

const osoba = {
  jmeno: 'Zuzka',
  vlasy: 'hnědá',
  oci: 'zelená',
  drink: 'domácí limonáda',
  text: function(){
    console.log(`Ahoj, jmenuji se ${this.jmeno}, moje barva vlasů je ${this.vlasy} a očí ${this.oci}. Těším se, že si spolu dámě něco k pití, mě třeba vždycky potěší, když má restaurace v jídelním lístku napsané: ${this.drink}. Zavolej!`) 

  }
};
osoba.text()
