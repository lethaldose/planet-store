export const FETCH_PLANETS_ERROR = 'FETCH_PLANETS_ERROR';
export const FETCH_PLANETS_SUCCESS = 'FETCH_PLANETS_SUCCESS';

const planets = [{
  name: 'Mars',
  description: 'The best planet',
  imageUrl: 'https://iadsb.tmgrup.com.tr/79258f/645/344/0/52/800/479?u=https://idsb.tmgrup.com.tr/2018/07/31/mars-invades-earth-red-planet-makes-closest-approach-in-15-years-1533054535455.jpg',
  price: {
    amount: '111.40', currency: 'AUD'
  }
}];

export function fetchPlanetsSuccess(planets) {
  return {
    type: FETCH_PLANETS_SUCCESS,
    planets,
  };
}

export function fetchPlanetsError(message) {
  return {
    type: FETCH_PLANETS_ERROR,
    message,
  };
}

export function fetchPlanets() {
  return (dispatch, getState) => {
    dispatch(fetchPlanetsSuccess(planets))
  }
};
