import { SECONDS} from '../constants/actions-types'

const initialState = {
  seconds: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SECONDS:
      return {
        ...state,
        seconds: action.payload,
      };
    default:
      break;
  }
  return state;
}

export default rootReducer; 