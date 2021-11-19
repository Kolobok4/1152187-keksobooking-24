import {addressAd, adForm} from '../form-validate.js';

const mapFilters = document.querySelector('.map__filters');
const disabledMapFilters = mapFilters.querySelectorAll('select.map__filter, fieldset');
const disabledFormFieldset = adForm.querySelectorAll('fieldset');


const toggleFormsDisabled  = () => {
  adForm.classList.toggle('ad-form--disabled');

  disabledFormFieldset.forEach((element) => {
    element.disabled = !element.disabled;
  });
  addressAd.readOnly = true;
};

const toggleFiltersDisabled  = () => {
  mapFilters.classList.toggle('map__filters--disabled');

  disabledMapFilters.forEach((element) => {
    element.disabled = !element.disabled;
  });
};


toggleFormsDisabled();
toggleFiltersDisabled();

export {toggleFormsDisabled, toggleFiltersDisabled, mapFilters};

