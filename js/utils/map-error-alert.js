const ALERT_SHOW_TIME = 5000;
const MESSAGE_MAP_FAIL_DATA = 'Не удалось загрузить данные всех меток на карте. Данные с сервера получены не в полном объеме';

const mapErrorAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {mapErrorAlert, MESSAGE_MAP_FAIL_DATA};
