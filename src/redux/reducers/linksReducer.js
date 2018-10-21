import {
  FETCH_LINKS,
  FETCH_LINKS_SUCCESS,
  FETCH_LINKS_FAILURE
} from '../constants/actionTypes';

const initialState = {
  links: [],
  isLoading: false,
  linksError: ''
};
const linksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LINKS:
      return { ...state, isLoading: true };
    case FETCH_LINKS_SUCCESS:
      return { ...state, isLoading: false, links: action.links };
    case FETCH_LINKS_FAILURE:
      return { ...state, isLoading: false, linksError: action.error };
    default:
      return { ...state };
  }
};
export default linksReducer;
