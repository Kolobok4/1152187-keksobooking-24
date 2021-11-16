import { DefaultCoordinate, resetButton} from '../form-validate.js';
import {mainPinMarker} from '../main-pin-marker.js';
import {adverts, map, MAP_ZOOM} from '../load-map.js';
import {createPin} from '../pin-marker.js';
import {MAX_OFFERS} from '../sort-pin.js';

const resetMap = () => {

  mainPinMarker.setLatLng({
    lat: DefaultCoordinate.LAT,
    lng: DefaultCoordinate.LNG,
  });

  map.setView({
    lat: DefaultCoordinate.LAT,
    lng: DefaultCoordinate.LNG,
  }, MAP_ZOOM);
  map.closePopup();
  createPin(adverts.slice(0, MAX_OFFERS));
};

resetButton.addEventListener('click', resetMap);

export {resetMap};

