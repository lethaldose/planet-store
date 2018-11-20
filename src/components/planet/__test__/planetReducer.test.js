import {
  fetchPlanetsSuccess,
  fetchPlanetsError,
  filterPlanets
} from '../planetActions.js';
import planetReducer from '../planetReducer';

describe('Planets reducer', () => {
  const planet1 = {
    name: 'Mars',
    description: 'The best planet',
    imageUrl: 'https://dummy.jpeg',
    price: {
      value: '111.40',
      currency: 'AUD'
    },
    area: {
      value: '9808',
      currency: 'sq km'
    }
  };

  const planet2 = {
    name: 'Venus',
    description: 'The best sky view',
    imageUrl: 'https://dummy1.jpeg',
    price: {
      value: '222.22',
      currency: 'AUD'
    },
    area: {
      value: '111.40',
      currency: 'sq km'
    }
  };

  describe('fetch planets', () => {
    it('FETCH_PLANETS_SUCCESS', () => {
      const planets = [planet1];
      const originalPlanets = [planet1];
      const initialState = { planets: [], originalPlanets: [] };
      const expectedState = { planets, originalPlanets };
      expect(planetReducer(initialState, fetchPlanetsSuccess(planets))).toEqual(
        expectedState
      );
    });

    it('FETCH_PLANETS_ERROR', () => {
      const message = 'error fetching';
      const initialState = { planets: [] };
      const expectedState = { message, planets: [] };
      expect(planetReducer(initialState, fetchPlanetsError(message))).toEqual(
        expectedState
      );
    });
  });

  describe('filter planets', () => {
    it('filters by name', () => {
      const planets = [planet1, planet2];
      const originalPlanets = [planet1, planet2];
      const filteredPlanets = [planet2];

      const initialState = { planets, originalPlanets };
      const expectedState = { planets: filteredPlanets, originalPlanets };

      expect(planetReducer(initialState, filterPlanets('Venus'))).toEqual(
        expectedState
      );
    });

    it('filters by price', () => {
      const planets = [planet1, planet2];
      const originalPlanets = [planet1, planet2];
      const filteredPlanets = [planet1];

      const initialState = { planets, originalPlanets };
      const expectedState = { planets: filteredPlanets, originalPlanets };

      expect(planetReducer(initialState, filterPlanets('9808'))).toEqual(
        expectedState
      );
    });
  });
});
