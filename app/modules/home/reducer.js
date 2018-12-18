import * as c from "./constants";

let initialState = {
  isFetching: true,
  articles: [],
  hasError: false,
  errorMessage: ""
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.RETRIEVING_HEADLINES: {
      let isFetching = state.articles.length > 0 ? false : true;

      return { ...state, isFetching, hasError: false };
    }
    case c.HEADLINES_AVAILABLE: {
      let { articles } = action.data;

      return {
        ...state,
        isFetching: false,
        articles,
        hasError: false
      };
    }
    case c.HEADLINES_ERROR: {
      const error = action.error;

      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: error
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
