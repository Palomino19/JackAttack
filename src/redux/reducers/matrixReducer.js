import * as ACTIONS from "../actions";
import matrix from "../../Data/matrixSpaces.json";
import produce from "immer";

const initialState = { matrix };

const matrixReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CLAIM_BOARD_SPACE:
      state.matrix[action.payload.cardBoardIndex].isClaimedBy =
        action.payload.team;
      break;
    case ACTIONS.GET_BOARD_STATE:
      state.matrix = action.payload.board;
      break;
    default:
      return state;
  }
});
export default matrixReducer;
