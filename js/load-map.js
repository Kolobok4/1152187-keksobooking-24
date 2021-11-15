import {request} from './api.js';
import {mapErrorAlert, MESSAGE_MAP_FAIL_DATA} from './utils/map-error-alert.js';
import {filterData, MAX_OFFERS} from './sort-pin.js';
import {mapFilters, toggleClassDisabled} from './utils/set-disabled.js';
import {addressAd, DefaultCoordinate} from './form-validate.js';
import {createPin, removePin} from './pin-marker.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAP_ZOOM = 13;

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


const map = L.map('map-canvas', {
  closePopupOnClick: false,
});

L.tileLayer(
  TILE_LAYER,
  {
    attribution: TILE_LAYER_ATTRIBUTION,
  },
).addTo(map);

const layerGroup = L.layerGroup().addTo(map);


map.on('load', () => {
  toggleClassDisabled();
  request(onSuccess, onError, 'GET');
  addressAd.value = `${DefaultCoordinate.LAT  }, ${ DefaultCoordinate.LNG}`;
}).setView({
  lat: DefaultCoordinate.LAT,
  lng: DefaultCoordinate.LNG,
}, MAP_ZOOM);

export {map, layerGroup, MAP_ZOOM};
