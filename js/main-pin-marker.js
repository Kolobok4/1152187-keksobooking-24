import {addressAd, DefaultCoordinate} from './form-validate.js';
import {map} from './load-map.js';


const FIXED_POINT = 5;
const MAIN_PIN_ICON = 'img/main-pin.svg';
const MAIN_PIN_ICON_SIZE = [52, 52];
const MAIN_PIN_ANCHOR_SIZE = [26, 52];


const mainPinIcon = L.icon({
  iconUrl: MAIN_PIN_ICON,
  iconSize: MAIN_PIN_ICON_SIZE,
  iconAnchor: MAIN_PIN_ANCHOR_SIZE,
});

const mainPinMarker = L.marker(
  {
    lat: DefaultCoordinate.LAT,
    lng: DefaultCoordinate.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.addEventListener('moveend', (evt) => {
  addressAd.value = `${evt.target.getLatLng().lat.toFixed(FIXED_POINT)  }, ${  evt.target.getLatLng().lng.toFixed(FIXED_POINT)}`;
});


export {mainPinMarker};
