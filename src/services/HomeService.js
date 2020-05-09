import axiosInstance from '../network';

export default async function getPhotos() {
  try {
    return axiosInstance.get('/photos');
  } catch (err) {
    return [];
  }
  
}