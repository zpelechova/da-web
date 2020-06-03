'use strict';

new Vue({
  el: '#app',
  data: {
    quantity: 1,
    buttonText: 'Koupit',
    clicked: false
  },
  methods: {
    handleClick(){
      this.buttonText = this.quantity + ' kusů v košíku';
      this.clicked = true;
      // btnElm.classList.add('btn--done');
    }
  }

});

