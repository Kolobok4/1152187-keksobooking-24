import {adForm, resetButton, priceAd, addressAd} from '../form-validate.js';
import {mapFilters} from './set-disabled.js';
import {map} from '../load-map.js';
import {mainPinMarker} from '../main-pin-marker.js';
import {DefaultCoordinate} from '../form-validate.js';


const clearPageElements = () => {
  adForm.reset();
  mapFilters.reset();
  mainPinMarker.setLatLng({ lat: DefaultCoordinate.LAT, lng: DefaultCoordinate.LNG });
  addressAd.value = `${DefaultCoordinate.LAT}, ${DefaultCoordinate.LNG}`;
  map.closePopup();
  priceAd.min = '';
  priceAd.min = 1000;
  priceAd.placeholder = 1000;

};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearPageElements();
});


export {clearPageElements};
