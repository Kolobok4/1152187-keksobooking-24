import {renderSimilarPopup} from './popup.js';
import {layerGroup} from './load-map.js';

const PIN_ICON = 'img/pin.svg';
const PIN_ICON_SIZE = [40, 40];
const PIN_ANCHOR_SIZE = [20, 40];


const pinIcon = L.icon(
  {
    iconUrl: PIN_ICON,
    iconSize: PIN_ICON_SIZE,
    iconAnchor: PIN_ANCHOR_SIZE,
  });


const removePin = () => {
  layerGroup.clearLayers();
};

const createPin = (points) => {
  points.forEach((point) => {
    const { location } = point;
    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon: pinIcon,
      },
    );

    marker
      .addTo(layerGroup)
      .bindPopup(renderSimilarPopup(point),
        {
          keepInView: true,
        },
      );
  });
};

export {removePin, createPin};
