
const buildingType = {
  flat: 'Квартира',
  bungalo: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


const photosList = (element, selector, photos) => {
  const container = element.querySelector(selector);

  if (photos.length === 0) {
    container.remove();
  }
  const template = container.querySelector('.popup__photo');

  photos.forEach((link) => {
    const photoContainer = template.cloneNode();
    photoContainer.src = link;
    container.append(photoContainer);
  });
  template.remove();
};

const featuresList = (element, selector, features) => {
  const container = element.querySelector(selector);
  const list = container.querySelectorAll('.popup__feature');

  list.forEach((listElement) => {
    if (!features.some((feature) => listElement.classList.contains(`popup__feature--${feature}`))) {
      listElement.remove();
    }
  });

  if (list.length === 0) {
    container.remove();
  }
};

const textDescription = (element, selector, text) => {
  const container = element.querySelector(selector);

  if (text) {
    container.textContent = text;
  } else {
    container.remove();
  }
};

const renderSimilarPopup  = (card) => {
  const offer = card.offer;
  const author = card.author;
  const cardElement = similarTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price}  ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = buildingType[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  photosList(cardElement, '.popup__photos', offer.photos);
  featuresList(cardElement, '.popup__features', offer.features);
  textDescription(cardElement, '.popup__description', offer.description);

  return cardElement;

};

export {renderSimilarPopup};
