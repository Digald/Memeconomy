import { TOGGLE_FORM } from "./actions";

const initialState = {
  loginIsToggled: true,
  signupIsToggled: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FORM:
      return {
        ...state,
        loginIsToggled: !state.loginIsToggled,
        signupIsToggled: !state.signupIsToggled
      };
    default:
      return state;
  }
}
