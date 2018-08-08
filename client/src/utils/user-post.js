import axios from "axios";
import { Redirect } from "react-router-dom";

export default {
  userSignUp: function(userdata) {
    return axios.post("/signup", userdata);
  },
  userLogIn: function(userdata) {
    return axios.post("/login", userdata).then(result => {
      console.log(result);
      if (result.status !== 200 || !result.data.success) {
          return false;
      }
      return true;
    });
  }
};
