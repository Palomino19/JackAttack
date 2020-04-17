import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import PropTypes from "prop-types";
import { rootReducer } from "./reducers/rootReducer";
import { createLogger } from "redux-logger";

const logger = createLogger({});
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
