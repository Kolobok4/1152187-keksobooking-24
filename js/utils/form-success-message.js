import {closeAlert} from './close-message.js';
import {clearPageElements} from './reset-form-filter.js';
import {resetMap} from './reset-map.js';

const successAlert = document.querySelector('#success').content.querySelector('.success');

const showFormSuccessAlert = () => {
  const successElement = successAlert.cloneNode(true);
  document.body.appendChild(successElement);
  closeAlert(successElement);
  clearPageElements();
  resetMap();
};


export {showFormSuccessAlert};
