import {adForm} from '../form-validate.js';
import {request} from '../api.js';
import {showFormSuccessAlert} from './form-success-alert.js';
import {showFormErrorAlert} from './form-error-alert.js';

const setFormSubmit = () => {
  const onSuccess = () => {
    showFormSuccessAlert();
  };

  const onError = () => {
    showFormErrorAlert();
  };
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    request(onSuccess, onError, 'POST', formData);
  });

};

setFormSubmit();

export {setFormSubmit};
