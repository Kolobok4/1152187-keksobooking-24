import {addressAd, DefaultCoordinate} from './form-validate.js';
import {renderSimilarPopup} from './popup.js';
import {setDisabledState, toggleClassDisabled} from './utils/set-disabled-state.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAP_ZOOM = 13;
const FIXED_POINT = 5;

const MAIN_PIN_ICON = 'img/main-pin.svg';
const PIN_ICON = 'img/pin.svg';
const MAIN_PIN_ICON_SIZE = [52, 52];
const MAIN_PIN_ANCHOR_SIZE = [26, 52];
const PIN_ICON_SIZE = [40, 40];
const PIN_ANCHOR_SIZE = [20, 40];

setDisabledState();
toggleClassDisabled();

const map = L.map('map-canvas', {
  closePopupOnClick: false,
});

map.on('load', () => {
  setDisabledState();
  toggleClassDisabled();
  addressAd.value = `${DefaultCoordinate.LAT  }, ${ DefaultCoordinate.LNG}`;
});
map.setView({
  lat: DefaultCoordinate.LAT,
  lng: DefaultCoordinate.LNG,
}, MAP_ZOOM);

L.tileLayer(
  TILE_LAYER,
  {
    attribution: TILE_LAYER_ATTRIBUTION,
  },
).addTo(map);

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

const pinIcon = L.icon(
  {
    iconUrl: PIN_ICON,
    iconSize: PIN_ICON_SIZE,
    iconAnchor: PIN_ANCHOR_SIZE,
  });

const getPoint = (card) => {
  const marker = L.marker(
    {
      lat: card.location.lat,
      lng: card.location.lng,
    },
    {
      icon: pinIcon,
    },
  );
  marker
    .addTo(map)
    .bindPopup(renderSimilarPopup(card));
};

const setPoints = (card) => {
  card.forEach((element) => {
    getPoint(element);
  });
};


export {DefaultCoordinate, map, mainPinMarker, MAP_ZOOM, setPoints};
