import {
  fetchPlanetsSuccess,
  fetchPlanetsError
} from "../planetActions.js";
import planetReducer from "../planetReducer";

describe('Planets reducer', () => {
  const planet1 = {
    name: 'Mars',
    description: 'The best planet',
    imageUrl: 'https://dummy.jpeg',
    price: {
      amount: '111.40', currency: 'AUD'
    }
  };

  describe('fetch planets', () => {

    it('FETCH_PLANETS_SUCCESS', () => {
      const planets = [planet1];
      const initialState = { planets: [] };
      const expectedState = { planets };
      expect(planetReducer(initialState, fetchPlanetsSuccess(planets))).toEqual(expectedState);
    });

    it('FETCH_PLANETS_ERROR', () => {
      const message = 'error fetching';
      const initialState = { planets: [] };
      const expectedState = { message, planets: [] };
      expect(planetReducer(initialState, fetchPlanetsError(message))).toEqual(expectedState);
    });
  });

});