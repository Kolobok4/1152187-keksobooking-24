import {closeAlert} from './close-message.js';

const successAlert = document.querySelector('#success').content.querySelector('.success');

const showFormSuccessAlert = () => {
  const successElement = successAlert.cloneNode(true);
  document.body.appendChild(successElement);

  closeAlert(successElement);
};


export {showFormSuccessAlert};
