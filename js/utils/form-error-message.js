import {closeAlert} from './close-message.js';

const errorAlert = document.querySelector('#error').content.querySelector('.error');

const showFormErrorAlert = () => {
  const errorElement = errorAlert.cloneNode(true);
  const errorButton = errorElement.querySelector('.error__button');
  document.body.appendChild(errorElement);

  errorButton.addEventListener('click', () => {
    errorElement.classList.add('hidden');
  });

  closeAlert(errorElement);
};

export {showFormErrorAlert};
