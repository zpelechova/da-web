new Vue({
  el: '#app',
  data: {
    jmeno: 'Abby',
    vaha: 5,
    srst: 'bílá',
    vek: 4,
    cinnosti: ['spaní', 'mazlení', 'žraní', 'zkoumání'],
    posledniAkce: '...'
  },
  methods: {
    nakrm() {
      this.vaha += 2;
      this.posledniAkce = 'nakrmili'
    },
    nakrmHodne() {
      this.vaha += 5;
      this.posledniAkce = 'nakrmili hodně'
    },
    vyvenci() {
      this.vaha--;
      this.posledniAkce = 'vyvenčili'
    }
  }
})