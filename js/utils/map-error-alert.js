

const ALERT_SHOW_TIME = 5000;
const MESSAGE_MAP_FAIL_DATA = 'Не удалось загрузить данные меток на карте. Данные с сервера получены не в полном объеме';

const paddingErrorAlert = '10px 3px';
const fontSizeErrorAlert = '30px';

const mapErrorAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = paddingErrorAlert;
  alertContainer.style.fontSize = fontSizeErrorAlert;
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {mapErrorAlert, MESSAGE_MAP_FAIL_DATA};
