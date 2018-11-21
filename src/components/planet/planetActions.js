import config from '../../config';
export const FETCH_PLANETS_ERROR = 'FETCH_PLANETS_ERROR';
export const FETCH_PLANETS_SUCCESS = 'FETCH_PLANETS_SUCCESS';
export const FILTER_PLANETS = 'FILTER_PLANETS';
export const FETCH_PLANET = 'FETCH_PLANET';

const fetchPlanetsEndpoint = `${config.planetAPIEndpoint.base}${
  config.planetAPIEndpoint.planets
}`;

export function fetchPlanetsSuccess(planets) {
  return {
    type: FETCH_PLANETS_SUCCESS,
    planets
  };
}

export function fetchPlanetsError(message) {
  return {
    type: FETCH_PLANETS_ERROR,
    message
  };
}

export function fetchPlanets() {
  return (dispatch, getState) => {
    return fetch(fetchPlanetsEndpoint)
      .then(resp => extractJson(resp))
      .then(json => {
        return dispatch(fetchPlanetsSuccess(json.planets));
      })
      .catch(err => {
        return dispatch(fetchPlanetsError(err.message));
      });
  };
}

export function fetchPlanet(planetId) {
  return {
    type: FETCH_PLANET,
    planetId
  };
}

export function filterPlanets(value) {
  return {
    type: FILTER_PLANETS,
    value
  };
}

const extractJson = res =>
  res
    .json()
    .then(json => [res.status, json])
    .then(([status, json]) => {
      if (status >= 300) {
        return Promise.reject({ message: json.message });
      } else {
        return Promise.resolve(json);
      }
    });
