import axios from 'axios';

const API_KEY = '30088439-f58bb35369039d74d15963769';
const PER_PAGE = '12';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (search, page) => {
  const response = await axios.get(
    `/?key=${API_KEY}&q=${search}&page=${page}&per_page=${PER_PAGE}&image_type=photo&orientation=horizontal`
  );
  return response.data.hits.map(({ id, webformatURL, largeImageURL }) => {
    return { id, webformatURL, largeImageURL };
  });
};

// export const addMaterial = async values => {
//   const response = await axios.post('/materials', values);
//   return response.data;
// };

// export const getMaterials = async () => {
//   const response = await axios.get('/materials');
//   return response.data;
// };

// export const deleteMaterial = async id => {
//   const response = await axios.delete(`/materials/${id}`);
//   return response.data;
// };

// export const updateMaterial = async fields => {
//   const response = await axios.put(`/materials/${fields.id}`, fields);
//   return response.data;
// };
