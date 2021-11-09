
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

  if (photos) {
    const photoElement = element.querySelector(selector);
    const photoFragment = document.createDocumentFragment();

    photos.forEach((photo) => {
      const popupPhoto = photoElement.querySelector('.popup__photo').cloneNode(true);
      popupPhoto.src = photo;
      photoFragment.appendChild(popupPhoto);
    });

    photoElement.innerHTML = '';
    photoElement.appendChild(photoFragment);
  } else {

    element.querySelector(selector).remove();
  }
};

const featuresList = (element, selector, features) => {

  if (features) {
    const featureElement= element.querySelector(selector);
    const featureItem = featureElement.querySelector('.popup__feature');
    const featuresFragment = document.createDocumentFragment();

    features.forEach((feature) => {
      const popupFeature = featureItem.cloneNode(true);
      popupFeature.classList.add(`popup__feature--${feature}`);
      featuresFragment.appendChild(popupFeature);
    });

    featureElement.innerHTML = '';
    featureElement.appendChild(featuresFragment);
  } else {
    element.querySelector(selector).remove();
  }

};

const textDescription = (element, selector, text) => {

  if (text) {
    element.querySelector(selector).textContent = text;
  } else {
    element.querySelector(selector).remove();
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
