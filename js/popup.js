
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

const removeFeaturesList = (element, selector, features) => {

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

const removeTextPopup = (element, selector, text) => {

  if (text) {
    element.querySelector(selector).textContent = text;
  } else {
    element.querySelector(selector).remove();
  }
};

const removeAvatarPopup = (element, selector, photo) => {
  if (photo) {
    element.querySelector(selector).src = photo;
  } else {
    element.querySelector(selector).remove();
  }
};


const renderSimilarPopup  = (card) => {
  const offer = card.offer;
  const author = card.author;
  const cardElement = similarTemplate.cloneNode(true);
  removeTextPopup(cardElement,'.popup__title', offer.title);
  removeTextPopup(cardElement,'.popup__text--address', offer.address);
  removeTextPopup(cardElement,'.popup__text--price', `${offer.price}  ₽/ночь`);
  removeTextPopup(cardElement,'.popup__type', buildingType[offer.type]);
  removeTextPopup(cardElement,'.popup__text--capacity',`${offer.rooms} комнаты для ${offer.guests} гостей`);
  removeTextPopup(cardElement,'.popup__text--time',`Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  removeAvatarPopup(cardElement,'.popup__avatar', author.avatar);
  photosList(cardElement, '.popup__photos', offer.photos);
  removeFeaturesList(cardElement, '.popup__features', offer.features);
  removeTextPopup(cardElement, '.popup__description', offer.description);

  return cardElement;

};

export {renderSimilarPopup};
