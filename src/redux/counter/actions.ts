import { DECREMENT, LOGIN, DECREMENT_ASYNC } from "./types";

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function login() {
  return {
    type: LOGIN
  };
}

export function decrementAsync() {
  return {
    type: DECREMENT_ASYNC
  };
}
