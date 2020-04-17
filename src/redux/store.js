import React from "react";
import { createStore } from "redux";
import PropTypes from "prop-types";
import { rootReducer } from "./rootReducer";

const store = createStore(rootReducer);

export default store;
