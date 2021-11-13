import {request} from './api.js';
import {createPin, removePin} from './map.js';
import {mapErrorAlert, MESSAGE_MAP_FAIL_DATA} from './utils/map-error-alert.js';
import {filterData, MAX_OFFERS} from './map-filters.js';

const mapFilters = document.querySelector('.map__filters');
let adverts = [];

const onMapFilterChange = () => {
  removePin();
  createPin(filterData(adverts));
};

const onSuccess = (data) => {
  adverts = data.slice();
  createPin(adverts.slice(0, MAX_OFFERS));

  mapFilters.addEventListener('change', onMapFilterChange);
};

const onError = () => {
  mapErrorAlert(MESSAGE_MAP_FAIL_DATA);
};

request(onSuccess, onError, 'GET');

export {request, onSuccess, onError};


