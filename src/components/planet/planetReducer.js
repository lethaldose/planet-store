import {
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_ERROR,
  FILTER_PLANETS,
  FETCH_PLANET
} from './planetActions';

function filterPlanets(action, state) {
  const includedIn = field =>
    (field || '').toLowerCase().includes(action.value.toLowerCase());

  let planets;

  if (!action.value) {
    planets = [...state.originalPlanets];
  } else {
    planets = state.originalPlanets.filter(p => {
      const filterFields = [p.name, p.description, p.area.value, p.price.value];
      return filterFields.some(includedIn);
    });
  }

  return {
    ...state,
    planets
  };
}

function getPlanetById(action, state) {
  console.log(state.originalPlanets);
  const planet = state.originalPlanets.find(
    p => Number(p.id) === Number(action.planetId)
  );
  return {
    ...state,
    planet
  };
}

export default function(
  state = { originalPlanets: [], planets: [], planet: {} },
  action
) {
  switch (action.type) {
    case FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        originalPlanets: action.planets,
        planets: action.planets
      };
    case FETCH_PLANETS_ERROR:
      return {
        ...state,
        message: action.message
      };
    case FILTER_PLANETS:
      return filterPlanets(action, state);
    case FETCH_PLANET:
      return getPlanetById(action, state);
    default: {
      return state;
    }
  }
}
