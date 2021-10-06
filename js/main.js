const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;

};

//getRandomInt(1, 5);
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

//getRandomFloat(1.2, 2.3, 3);
/*Метод форматирует число, используя запись с фиксированной запятой
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Функция принимает строку в качестве аргумента и возвращает десятичное число
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat*/

const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
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

const SIMILAR_COUNT = 10;
const RANDOM_LAT = getRandomFloat(35.65000, 35.70000, 5);
const RANDOM_LNG = getRandomFloat(139.70000, 139.80000, 5);

// eslint-disable-next-line
const createRandomeArray = () => {
  return {
    author: {
      avatar: AVATAR[getRandomInt(0, AVATAR.length - 1)],
    },
    offer: {
      title: 'Сдаётся',
      adress: `${RANDOM_LAT}, ${RANDOM_LNG}`,
      price: getRandomInt(0, 100),
      type: TYPE[getRandomInt(0, TYPE.length - 1)],
      rooms: getRandomInt(0, 5),
      guests: getRandomInt(0, 10),
      checkin: CHECKIN[getRandomInt(0, CHECKIN.length - 1)],
      checkout: CHECKOUT[getRandomInt(0, CHECKOUT.length - 1)],
      features: FEATURES[getRandomInt(0, FEATURES.length - 1)],
      description: 'Дом',
      photos: PHOTOS[getRandomInt(0, PHOTOS.length - 1)],
    },
    location: {
      lat: RANDOM_LAT,
      lng: RANDOM_LNG,
    },
  };
};

const similarRandomArray = Array.from({length: SIMILAR_COUNT}, createRandomeArray);

// eslint-disable-next-line no-console
console.log(similarRandomArray);
