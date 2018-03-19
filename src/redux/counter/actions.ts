import { DECREMENT, DECREMENT_ASYNC } from "./types";

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function decrementAsync() {
  return {
    type: DECREMENT_ASYNC
  };
}
