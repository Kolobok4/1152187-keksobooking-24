import {DefaultCoordinate, resetButton} from '../ad-form.js';
import {map, mainPinMarker, MAP_ZOOM} from '../map.js';


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
