import axios from 'axios';
import baseUrl from '.';

export const addLinkAPI = linkData => {
  return axios.post(`${baseUrl}/links`, linkData);
};

export const getLinksAPI = () => {
  return axios.get(`${baseUrl}/links`);
};
