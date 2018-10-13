import axios from 'axios';
import baseUrl from '.';

export const addLink = linkData => {
  return axios.post(`${baseUrl}/links`, linkData);
};

export const getLinks = () => {
  return axios.get(`${baseUrl}/links`);
};
