import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';
import {getRandomPositiveFloat} from './utils/get-random-positive-float.js';

const TITLE = [
  'Аренда',
  'Продажа',
];

const DESCRIPTION = [
  'Выгодная цена',
  'Тихий район',
  'Рядом школа',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const LOCATION_LAT = [35.65000, 35.70000, 5];

const LOCATION_LNG = [139.70000, 139.80000, 5];

const SIMILAR_COUNT = 10;

const Price = {
  MIN: 1,
  MAX: 1000,
};

const Rooms = {
  MIN: 1,
  MAX: 5,
};

const Guests = {
  MIN: 1,
  MAX: 20,
};

const getAuthorArray = (index) => {
  index = index + 1;
  return { avatar: `img/avatars/user${(index <= 9) ? `0${  index}` : index  }.png`};
};

const createOfferArray = () => ({
  title: TITLE[getRandomPositiveInteger(0, TITLE.length - 1)],
  adress: `${getRandomPositiveFloat(...LOCATION_LAT)}, ${getRandomPositiveFloat(...LOCATION_LNG)}`,
  price: getRandomPositiveInteger(Price.MIN, Price.MAX),
  type: TYPE[getRandomPositiveInteger(0, TYPE.length - 1)],
  rooms: getRandomPositiveInteger(Rooms.MIN, Rooms.MAX),
  guests: getRandomPositiveInteger(Guests.MIN, Guests.MAX),
  checkin: CHECKIN[getRandomPositiveInteger(0, CHECKIN.length - 1)],
  checkout: CHECKOUT[getRandomPositiveInteger(0, CHECKOUT.length - 1)],
  features: FEATURES.slice(0, getRandomPositiveInteger(0, FEATURES.length)),
  description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
  photos: PHOTOS.slice(0, getRandomPositiveInteger(0, PHOTOS.length)),
});

const createLocationArray = () => ({
  lat: `${getRandomPositiveFloat(...LOCATION_LAT)}`,
  lng: `${getRandomPositiveFloat(...LOCATION_LNG)}`,
});

const getCreateArray = () => {
  const arrayData = [];
  // eslint-disable-next-line id-length
  for (let i = 0; i <=  SIMILAR_COUNT - 1; i++) {
    arrayData.push({
      author: getAuthorArray(i),
      offer: createOfferArray(),
      location: createLocationArray(),
    });
  }
  return arrayData;
};
export {TYPE};
export {FEATURES};
export {getCreateArray};

