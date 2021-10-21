const mapForm = document.querySelectorAll('.map__filters');
const mapSelect = document.querySelectorAll('select');
const mapInput = document.querySelectorAll('input');

// eslint-disable-next-line no-unused-vars
const filterDisabled = () => {
  mapForm.forEach((element) => {
    element.classList.add('ad-form--disabled');
  });
  mapSelect.forEach((element) => {
    element.disabled = true;
  });
  mapInput.forEach((element) => {
    element.disabled = true;
  });
};

// eslint-disable-next-line no-unused-vars
const filterEnabled = () => {
  mapForm.forEach((element) => {
    element.classList.remove('ad-form--disabled');
  });
  mapSelect.forEach((element) => {
    element.disabled = false;
  });
  mapInput.forEach((element) => {
    element.disabled = false;
  });
};

