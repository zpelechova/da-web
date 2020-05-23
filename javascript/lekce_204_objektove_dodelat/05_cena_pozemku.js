// Začněte s hotovým řešením předchozího příkladu.

// Do všech pozemků přidejte novou vlastost m2Price, která udává cenu pozemku za jeden metr čtvereční.
// Do prototypu Estate přidejte metodu price, která spočítá cenu celého pozemku podle jeho výměry.
// Vyzkoušejte v konzoli zavolat metodu price na všech vašich pozemcích.
// Vyzkoušejte, co se stane, když do některého pozemku zapomenete vloži vlastnost m2price a zkusíte zavolat metodu price.

const Estate = {
  area: function () {
    return(this.width * this.height)
  },
  border: function () {
    return((this.width + this.height) *2)
  },
  price: function () {
    return(this.area() * this.m2price)
  } 
};

const estate1 = {
  width: 120,
  height: 50,
  m2price: 3670,
  __proto__: Estate
};

const estate2 = {
  width: 560,
  height: 720,
  m2price: 126,
  __proto__: Estate
}

const estate3 = {
  width: 15,
  height: 20,
  __proto__: Estate
}
