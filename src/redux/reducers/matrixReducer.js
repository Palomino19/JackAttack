import * as ACTIONS from "../actions";
import matrix from "../../data/matrixSpaces.json";
import produce from "immer";

const initialState = { matrix };

const matrixReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CLAIM_BOARD_SPACE:
      state.matrix[action.payload.cardBoardIndex].isClaimedBy = 1;
      break;
    default:
      return state;
  }
});
export default matrixReducer;
