new Vue ({
  el: '#app',
  data: {
    ukoly: [
      'projit slack',
      'odpovedet na maily',
      'uspat deti',
      'uklidit pradlo',
      'dodelat ukoly'
    ]
  },
  methods: {
    pridejUkol(){
      this.ukoly.push('ucit se')
    },
    smazUkol(index){
      this.ukoly.splice(index, 1)
    }
  }
})