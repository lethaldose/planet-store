import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  FETCH_PLANETS_ERROR,
  FETCH_PLANETS_SUCCESS,
  fetchPlanets
} from '../planetActions.js';
import fetchMock from 'fetch-mock';
import config from '../../../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Planets actions', () => {
  const planets = [
    {
      name: 'Mars',
      description: 'The best planet',
      imageUrl: 'https://dummy.jpg',
      price: {
        amount: '111.40',
        currency: 'AUD'
      }
    }
  ];

  const fetchPlanetsEndpoint = `${config.planetAPIEndpoint.base}${
    config.planetAPIEndpoint.planets
  }`;

  describe('fetch planets', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('should get planets from api', () => {
      fetchMock.get(fetchPlanetsEndpoint, {
        status: 200,
        body: planets
      });
      const expectedActions = [
        {
          type: FETCH_PLANETS_SUCCESS,
          planets
        }
      ];
      const store = mockStore({});
      return store.dispatch(fetchPlanets()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should return error message', () => {
      const message = 'server error!!';

      fetchMock.get(fetchPlanetsEndpoint, {
        status: 500,
        body: { message }
      });
      const expectedActions = [
        {
          type: FETCH_PLANETS_ERROR,
          message
        }
      ];
      const store = mockStore({});
      return store.dispatch(fetchPlanets()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
