// TODO: add and export your own actions
import cities from '../cities';

export const setCities = () => {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_CITIES',
    payload: cities
  };
};

export const setActiveCity = (city) => {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city
  };
};

