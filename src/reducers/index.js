import { combineReducers } from 'redux';
import cat from './cat';
import dog from './dog';

const reducers = combineReducers({
  cat,
  dog
});

export default reducers;
