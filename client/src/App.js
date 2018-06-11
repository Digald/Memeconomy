import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import rootReducer from "./rootReducer";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import LandingPage from "./pages/LandingPage";

const middleware = [logger, thunk];
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
