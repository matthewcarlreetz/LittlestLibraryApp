import { DECREMENT, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

export interface Counter {
  count: number;
}

const initialState = {
  count: 0
};

export default function counterReducer(
  state: Counter = initialState,
  action
): Counter {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        count: state.count + 5
      };
    case LOGIN_FAIL:
      return {
        ...state,
        count: state.count + 7
      };
    default:
      return state;
  }
}
