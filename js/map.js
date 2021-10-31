import {addressAd, resetButton} from './ad-form.js';
import {similarCards} from './popup.js';
import {setDisabledState, toggleClassDisabled} from './utils/set-disabled-state.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const MAP_ZOOM = 13;
const FIXED_POINT = 5;

const MAIN_PIN_ICON = 'img/main-pin.svg';
const PIN_ICON = 'img/pin.svg';
const MAIN_PIN_ICON_SIZE = [52, 52];
const PIN_ICON_SIZE = [40, 40];

const DefaultCoordinate = {
  LAT: 35.68950,
  LNG: 139.69171,
};

setDisabledState();
toggleClassDisabled();

const map = L.map('map-canvas')
  .on('load', () => {
    setDisabledState();
    toggleClassDisabled();
    addressAd.value = `${DefaultCoordinate.LAT  }, ${ DefaultCoordinate.LNG}`;
  })
  .setView({
    lat: DefaultCoordinate.LAT,
    lng: DefaultCoordinate.LNG,
  }, MAP_ZOOM);

L.tileLayer(
  TILE_LAYER,
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: MAIN_PIN_ICON,
  iconSize: MAIN_PIN_ICON_SIZE,
  iconAnchor: MAIN_PIN_ICON_SIZE,
});

const mainPinMarker = L.marker({
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

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: DefaultCoordinate.LAT,
    lng: DefaultCoordinate.LNG,
  });

  map.setView({
    lat: DefaultCoordinate.LAT,
    lng: DefaultCoordinate.LNG,
  }, MAP_ZOOM);
});

const createMarker = (card) => {

  const pinIcon = L.icon({
    iconUrl: PIN_ICON,
    iconSize: PIN_ICON_SIZE,
    iconAnchor: PIN_ICON_SIZE,
  });

  const lat = card.location.lat;
  const lng = card.location.lng;

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      pinIcon,
    },
  );

  marker
    .addTo(map);
};

similarCards.forEach((card) => {
  createMarker(card);
});
