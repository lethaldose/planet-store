import config from '../../config';
export const FETCH_PLANETS_ERROR = 'FETCH_PLANETS_ERROR';
export const FETCH_PLANETS_SUCCESS = 'FETCH_PLANETS_SUCCESS';

// const planets = [{
//   name: 'Mars',
//   description: 'The best planet',
//   imageUrl: 'https://iadsb.tmgrup.com.tr/79258f/645/344/0/52/800/479?u=https://idsb.tmgrup.com.tr/2018/07/31/mars-invades-earth-red-planet-makes-closest-approach-in-15-years-1533054535455.jpg',
//   price: {
//     amount: '111.40', currency: 'AUD'
//   }
// }];

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
        return dispatch(fetchPlanetsSuccess(json));
      })
      .catch(err => {
        return dispatch(fetchPlanetsError(err.message));
      });
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
