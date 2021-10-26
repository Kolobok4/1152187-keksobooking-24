import './popup.js';
import {adForm} from './ad-form.js';

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


const titleAd = adForm.querySelector('#title');
const priceAd = adForm.querySelector('#price');
const typeAd = adForm.querySelector('#type');


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


const onOfferTypeChange = () => {
  const minPrice = priceOffers[typeAd.value];
  priceAd.placeholder = minPrice;
  priceAd.min = minPrice;

};

typeAd.addEventListener('change', onOfferTypeChange);

