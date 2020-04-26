import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import PropTypes from "prop-types";
import { rootReducer } from "./reducers/rootReducer";
import { createLogger } from "redux-logger";
import database from "../../src/database/firebase.js";
import thunk from "redux-thunk";

const logger = createLogger({});
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
