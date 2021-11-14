import { DefaultCoordinate, resetButton} from '../form-validate.js';
import {mainPinMarker} from '../main-pin-marker.js';
import {map, MAP_ZOOM} from '../load-map.js';


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
};

resetButton.addEventListener('click', resetMap);

export {resetMap};
