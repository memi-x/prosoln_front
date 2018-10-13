import {
  FETCH_LINKS,
  FETCH_LINKS_SUCCESS,
  FETCH_LINKS_FAILURE
} from '../constants/actionTypes';

export const fetchLinks = () => ({
  type: FETCH_LINKS
});

export const fetchLinksSuccess = ({ links }) => ({
  type: FETCH_LINKS_SUCCESS,
  links
});

export const fetchLinksFailure = error => ({
  type: FETCH_LINKS_FAILURE,
  error
});
