import { dogs } from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function dog(state = initialState, action) {
  switch (action.type) {
    case dogs.FETCH_DOG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        dog: action.dog
      }
    default: return state;
  }
}
