import {request} from './api.js';
import {setPoints} from './map.js';
import {mapErrorAlert, MESSAGE_MAP_FAIL_DATA} from './utils/map-error-alert.js';

let pins = [];

const showMapErrorAlert = () => {

  const onSuccess = (data) => {
    // eslint-disable-next-line no-unused-vars
    pins = data.slice();
    setPoints(data);
  };

  const onError = () => {
    mapErrorAlert(MESSAGE_MAP_FAIL_DATA);
  };

  request(onSuccess, onError, 'GET');
};

showMapErrorAlert();

export {showMapErrorAlert};
