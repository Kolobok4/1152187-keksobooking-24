const closeKeyName = 'Escape';

const closeAlert = (element) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === closeKeyName) {
      element.classList.add('hidden');

    }
  });

  document.addEventListener('click', () => {
    element.classList.add('hidden');

  });
};


export {closeAlert};
