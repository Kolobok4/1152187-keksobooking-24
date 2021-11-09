import {request} from './api.js';
import {setPoints} from './map.js';
import {mapErrorAlert, MESSAGE_MAP_FAIL_DATA} from './utils/map-error-alert.js';


const showMapPins = () => {

  const onSuccess = (data) => {
    setPoints(data);
  };

  const onError = () => {
    mapErrorAlert(MESSAGE_MAP_FAIL_DATA);
  };

  request(onSuccess, onError, 'GET');
};

showMapPins();

export {showMapPins};
