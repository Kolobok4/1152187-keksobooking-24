const adForm = document.querySelector('.ad-form');
const titleAd = adForm.querySelector('#title');
const priceAd = adForm.querySelector('#price');
const typeAd = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const timeAd = adForm.querySelector('.ad-form__element--time');
const guestNumber = document.querySelectorAll('#capacity > option');
const roomNumber = document.querySelector('#room_number');
const addressAd = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const priceOffers = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};

const ROOMS_GUESTS = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const DefaultCoordinate = {
  LAT: 35.68950,
  LNG: 139.69171,
};

titleAd.addEventListener('input', () =>  {

  const valueLength = titleAd.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleAd.setCustomValidity(`Заголовок должен состоять минимум из 30-ти символов. Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleAd.setCustomValidity(`Заголовок не должен превышать 100 символов. Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    titleAd.setCustomValidity('');
  }
  titleAd.reportValidity();
});

const onAdPriceChange = () => {

  const priceSelect = priceOffers[typeAd.value];

  priceAd.placeholder = priceSelect;
  priceAd.min = priceSelect;

};

typeAd.addEventListener('change', onAdPriceChange);

const onAdTimeChange = (evt) => {
  timeOut.value = evt.target.value;
  timeIn.value = evt.target.value;
};

timeAd.addEventListener('change', onAdTimeChange);

const validateRooms = () => {
  const roomValue = roomNumber.value;

  guestNumber.forEach((guests) => {

    const isDisabled = (ROOMS_GUESTS[roomValue].indexOf(guests.value) === -1);

    guests.selected = ROOMS_GUESTS[roomValue][0] === guests.value;
    guests.disabled = isDisabled;
    guests.hidden = isDisabled;
  });
};

validateRooms();

const onRoomNumberChange = () => {
  validateRooms();
};

roomNumber.addEventListener('change', onRoomNumberChange);

export {adForm, addressAd, resetButton, DefaultCoordinate};
