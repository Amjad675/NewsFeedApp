import axios from "axios";
import * as c from "./constants";
import * as s from "../../config/appsettings";

export function getNewsHeadlines(country = "us") {
  return dispatch => {
    dispatch({ type: c.RETRIEVING_HEADLINES });
    return new Promise((resolve, reject) => {
      const url = `${s.API_URL}country=${country}&apiKey=${
        s.API_KEY
      }&pageSize=20`;
      axios
        .get(url)
        .then(res => res.data)
        .then(data => {
          dispatch({ type: c.HEADLINES_AVAILABLE, data });
          resolve();
        })
        .catch(error => {
          dispatch({ type: c.HEADLINES_ERROR, error });
          reject();
        });
    });
  };
}

export function getHeadlinesBySource(source) {
  return dispatch => {
    dispatch({ type: c.RETRIEVING_HEADLINES });
    return new Promise((resolve, reject) => {
      const url = `${s.API_URL}sources=${source}&apiKey=${
        s.API_KEY
      }&pageSize=20`;
      axios
        .get(url)
        .then(res => res.data)
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  };
}
