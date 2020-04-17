import * as ACTIONS from "../actions";
import defaultMatrix from "../../data/matrixSpaces.json";

const initialState = defaultMatrix;

function matrixReducer(state = initialState, action) {
  switch (action.type) {
  }

  return state;
}

export default matrixReducer;
