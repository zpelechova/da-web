// Vytvořte prototyp Clock, který bude přestavovat digitální hodiny zobrazující hodiny a minuty. Metody prototypu pracují s vlastnostmi this.hours a this.minutes.
const Clock = {
  hourUp: function () {
    this.hours += 1;
    if (this.hours === 24) {
      this.hours = 0
    }
  },
  hourDown: function () {
    this.hours -= 1;
    if (this.hours === -1) {
      this.hours = 23
    }
  },
  minuteUp: function () {
    this.minutes += 1;
    if (this.minutes === 60 && this.hours === 23) {
      this.minutes = 0
      this.hours = 0
    } else if (this.minutes === 60) {
      this.minutes = 0
    }
  },
  minuteDown: function () {
    this.minutes -= 1;
    if (this.minutes === -1 && this.hours === 0) {
      this.minutes = 59
      this.hours = 23
    } else if (this.minutes === -1) {
      this.minutes = 59
    }
  }
}

const time = {
  hours: 23,
  minutes: 59,
  __proto__: Clock
}

const show = (a) => console.log(a)

const change = (time) => {
  show('Výchozí čas');
  show(time);
  show('O minutu víc')
  time.minuteUp();
  show(time);
  show('O dvě minuty míň')
  time.minuteDown();
  time.minuteDown();
  show(time);
  show('O dvě hodiny a dvě minuty víc')
  time.hourUp();
  time.hourUp();
  time.minuteUp();
  time.minuteUp();
  show(`${time.hours}:${time.minutes}`)
}

change(time)
// Přidejte do prototypu metodu hourUp, která zvýší čas na hodinách o jednu hodinu. Hodiny používají 24-hodinový formát, pod hodině 23 tedy následuje hodina 0.
// Podobným způsobem vytvořte metodu hourDown, která sníží čas o jednu hodinu.
// Přidejte metodu minuteUp, která zvýší čas na hodinách o jednu minutu. Dejte dobrý pozor na časy jako 9:59 a hlavně 23:59.
// Přidejte metodu minuteDown, která sníží čas na hodinách o jednu minutu. Pozor na časy jako 9:00 a hlavně 0:00.
// Přidejte metodu show, která vrátí řetězec s aktuláním časem na hodinách ve formátu H:MM, jedy alespoň jedna cifra pro hodinu a přesně dvě cifry pro minutu.
// Vytvořte několik objektů hodin s různými časy a vyzkoušejte v konzoli svoje metody.