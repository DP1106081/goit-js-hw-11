import axios from 'axios';

const API_KEY = '57589880-91d2feb9d1ddc011e9b4ff177';
const URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log('response', response.data);
      return response.data;
    });
}
