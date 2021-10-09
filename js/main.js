
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

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/*Получение случайного целого числа в заданном интервале, включительно
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/

const getRandomFloat = (min, max, floatPoint) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return parseFloat((Math.random() * (max - min) + min).toFixed(floatPoint));
};

const getAuthorArray = (index) => {
  index = index + 1;
  return { avatar: `img/avatars/user${(index <= 9) ? `0${  index}` : index  }.png`};
};

const createOfferArray = () => ({
  title: TITLE[getRandomInt(0, TITLE.length - 1)],
  adress: `${getRandomFloat(...LOCATION_LAT)}, ${getRandomFloat(...LOCATION_LNG)}`,
  price: getRandomInt(Price.MIN, Price.MAX),
  type: TYPE[getRandomInt(0, TYPE.length - 1)],
  rooms: getRandomInt(Rooms.MIN, Rooms.MAX),
  guests: getRandomInt(Guests.MIN, Guests.MAX),
  checkin: CHECKIN[getRandomInt(0, CHECKIN.length - 1)],
  checkout: CHECKOUT[getRandomInt(0, CHECKOUT.length - 1)],
  features: FEATURES.slice(0, getRandomInt(0, FEATURES.length)),
  description: DESCRIPTION[getRandomInt(0, DESCRIPTION.length - 1)],
  photos: PHOTOS.slice(0, getRandomInt(0, PHOTOS.length)),
});

const createLocationArray = () => ({
  lat: `${getRandomFloat(...LOCATION_LAT)}`,
  lng: `${getRandomFloat(...LOCATION_LNG)}`,
});

// eslint-disable-next-line no-unused-vars
const getCreateArray = () => {
  const arrayData = [];
  // eslint-disable-next-line id-length
  for (let i = 0; i <=  SIMILAR_COUNT- 1; i++) {
    arrayData.push({
      author: getAuthorArray(i),
      offer: createOfferArray(),
      location: createLocationArray(),
    });
  }
  return arrayData;
};

