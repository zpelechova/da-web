'use strict';

const menuTemplate = Handlebars.compile(
  document.querySelector('#menu-template').innerHTML
);

const renderMenu = (menu) => {
  const helperELm = document.createElement('div');
  helperELm.innerHTML = menuTemplate(menu);

  const menuListElm = helperELm.querySelector('.menu');
  for (let i = 0; i < menu.menicko.length; i += 1) {
    menuListElm.appendChild(renderMenuItem(menu.menicko[i]));
  }

  return helperELm.children[0];
};


