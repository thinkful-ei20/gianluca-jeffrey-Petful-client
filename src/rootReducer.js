import { combineReducers } from 'redux';

import cats from './reducers/cats';
import dogs from './reducers/dogs';

export default combineReducers({
  cats,
  dogs
});
