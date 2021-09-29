const getRandomInt = (min, max) => {

  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;

};

getRandomInt(1, 5);
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

getRandomFloat(1.2, 2.3, 3);
/*Метод форматирует число, используя запись с фиксированной запятой
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Функция принимает строку в качестве аргумента и возвращает десятичное число
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat*/

