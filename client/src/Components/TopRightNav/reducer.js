import { TICK } from "./actions";

const initialState = {
  currentTime: Date.now()
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TICK:
      return { ...state, currentTime: Date.now() };
    default:
      return state;
  }
}
