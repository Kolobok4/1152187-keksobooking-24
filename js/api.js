const Urls = {
  GET: 'https://24.javascript.pages.academy/keksobooking/data',
  POST: 'https://24.javascript.pages.academy/keksobooking',
};

const request = (onSuccess, onError, method, formData) => {
  fetch(Urls[method],
    {
      method: method,
      body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};

export { request };


