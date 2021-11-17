import {adForm, resetButton, priceAd, addressAd} from '../form-validate.js';
import {mapFilters} from './set-disabled.js';
import {map} from '../load-map.js';
import {mainPinMarker} from '../main-pin-marker.js';
import {DefaultCoordinate} from '../form-validate.js';

const MIN_PRICE = 1000;

const clearPageElements = () => {
  adForm.reset();
  mapFilters.reset();
  mainPinMarker.setLatLng({ lat: DefaultCoordinate.LAT, lng: DefaultCoordinate.LNG });
  addressAd.value = `${DefaultCoordinate.LAT}, ${DefaultCoordinate.LNG}`;
  map.closePopup();
  priceAd.min = '';
  priceAd.min = MIN_PRICE;
  priceAd.placeholder = MIN_PRICE;

};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearPageElements();
});


export {clearPageElements};
