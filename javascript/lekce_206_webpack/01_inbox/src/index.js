import './index.html';
import './style.css';
import Handlebars from 'handlebars';

const message = {
  sender: 'Milan Kouhoutek',
  subject: 'Nabídka spolupráce',
  date: 'po 13. března',
  time: '8:45',
};

const msgTemplate = Handlebars.compile(
  document.querySelector('#msgTemplate').innerHTML
);

const renderMsg = (msg) => {
  const helperELm = document.createElement('div');
  helperELm.innerHTML = msgTemplate(msg);
  return helperELm.children[0];
};

const inboxElm = document.querySelector('.inbox');
const elm = renderMsg(message);
inboxElm.appendChild(elm);