import {
  SEARCH_RECIPES,
  SET_LOADING,
  CLEAR_RECIPES,
  ERROR_SEARCH
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
        load: false
      };
    case ERROR_SEARCH:
      return {
        ...state,
        loading: false,
        load: true
      };
    case CLEAR_RECIPES:
      return {
        ...state,
        recipes: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return {state, load: false};
  }
};
