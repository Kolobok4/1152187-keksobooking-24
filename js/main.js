const getRandomInt = (min, max) => {

  if (min >= max || min < 0) {
    throw new RangeError('Недопустимый диапазон чисел');
  };

  return Math.floor(Math.random() * (max - min + 1)) + min;

};

getRandomInt();
/*Получение случайного целого числа в заданном интервале, включительно
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/

const getRandomFloat = (min, max, floatPoint) => {

  if (min >= max || min < 0) {
    throw new Error('Некорректный диапазон чисел');
  };

  return parseFloat((Math.random() * (max - min) + min).toFixed(floatPoint));

};

getRandomFloat();
/*Метод форматирует число, используя запись с фиксированной запятой
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Функция принимает строку в качестве аргумента и возвращает десятичное число
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat*/

