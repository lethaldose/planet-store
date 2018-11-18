import {
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_ERROR,
} from './planetActions';

export default function (state = { planets: [] }, action) {
  switch (action.type) {
    case FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.planets,
      };
    case FETCH_PLANETS_ERROR:
      return {
        ...state,
        message: action.message,
      };
    default: {
      return state;
    }
  }
}
