import * as c from "./constants";

let initialState = {
  value: 5,
  name: "Fazlan Fairooz",
  isFetching: true,
  articles: [],
  hasError: false,
  errorMessage: "",
  sessionActive: true
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.INCREMENT: {
      return {
        ...state,
        value: state.value + 1
      };
    }
    case c.DECREMENT: {
      return {
        ...state,
        value: state.value - 1
      };
    }
    case c.UPDATE_NAME: {
      return {
        ...state,
        name: action.value
      };
    }
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
    case c.UPDATE_SESSION: {
      return {
        ...state,
        sessionActive: action.data
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
