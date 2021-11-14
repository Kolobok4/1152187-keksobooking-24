const  MAX_OFFERS = 10;
const DEFAUL_VALUE = 'any';
const priceFilter = {
  'low': {
    start: 0,
    end: 10000,
  },
  'middle': {
    start: 10000,
    end: 50000,
  },
  'hight': {
    start: 50000,
    end: Infinity,
  },
};

const filters = Array.from(document.querySelector('.map__filters').children);

const filterSelector  = {
  'housing-type': (data, filter) => filter.value === data.offer.type,
  'housing-price': (data, filter) => data.offer.price >= priceFilter[filter.value].start && data.offer.price < priceFilter[filter.value].end,
  'housing-rooms': (data, filter) => filter.value === data.offer.rooms.toString(),
  'housing-guests': (data, filter) => filter.value === data.offer.guests.toString(),
  'housing-features': (data, filter) => {
    const checkListElements = Array.from(filter.querySelectorAll('input[type="checkbox"]:checked'));

    return checkListElements.every((checkbox) => data.offer.features.some((feature) => feature === checkbox.value));
  },
};

const filterData = (data) => {
  const filterOffers = [];
  let index = 0;
  let result;

  while (index < data.length && filterOffers.length < MAX_OFFERS) {
    result = filters.every((filter) => (filter.value === DEFAUL_VALUE) ? true : filterSelector[filter.id](data[index], filter));
    if (result) {
      filterOffers.push(data[index]);
    }

    index++;

  }
  return filterOffers;

};

export {filterSelector, filterData, MAX_OFFERS};
