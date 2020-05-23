// Představte si, že programujeme aplikaci, která spravuje inzeráty k pronájmu pozemků. Každý pozemek budeme reprezentovat jak obdélník s určitou šírkou a výškou v metrech. Pro každý pozemek také budeme chtít určit jeho výměru v metrech čtverečních a obvod pozemku v metrech.

// Založte JavaScriptový program a vytvořte objekt s názvem Estate podle následujícího vzoru

const Estate = {
  area: function () {
    return(this.width * this.height)
  },
  border: function () {
    return((this.width + this.height) *2)
  },
};
// Tento objekt bude představovat prototyp pro všechny naše pozemky.

// Doplňte kód metody area, která na základě hodnot this.width a this.height vrátí výměru pozemku v metrech čtverečních.
// Doplňte kód metody border, která spočítá délku hranice pozemku v metrech.
// Vytvořte objekt estate1 jako níže.
const estate1 = {
  width: 120,
  height: 50,
  __proto__: Estate
};
// Pomocí vlastnosti __proto__ nastavte tomuto pozemku prototyp Estate. V konzoli vyzkoušejte následujicí příkazy.

// > estate1.area()
// > estate1.border()

// Vytvořte pozemek estate2 s nějakými rozměry a správným prototypem a v konzli vyzoušejte, že i tento správně funguje.

const estate2 = {
  width: 560,
  height: 720,
  __proto__: Estate
}