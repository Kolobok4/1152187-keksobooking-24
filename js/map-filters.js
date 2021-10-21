
const mapForm = document.querySelectorAll('.map__filters');
const mapSelect = document.querySelectorAll('select');
const mapInput = document.querySelectorAll('input');

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

filterDisabled();
filterEnabled();
