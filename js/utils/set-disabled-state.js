import {mapFilters} from '../map-filters.js';
import {adForm} from '../ad-form.js';

const disabledFields = document.querySelectorAll('select.map__filter, fieldset');

const setDisabledState = () => {
  disabledFields.forEach((element) => {
    element.disabled = !element.disabled;
  });
};

const toggleClassDisabled  = () => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilters.classList.toggle('map__filters--disabled');
};

export {setDisabledState,toggleClassDisabled};

