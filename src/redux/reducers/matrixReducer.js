import * as ACTIONS from "../actions";
import boardSpaces from "../../Data/matrixSpaces.json";
import produce from "immer";
import _ from "lodash";

const newBoard = _.chunk(boardSpaces, 10);

const initialState = { matrix: newBoard };

const matrixReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CLAIM_BOARD_SPACE:
      state.matrix[action.payload.rowIndex][
        action.payload.columnIndex
      ].isClaimedBy = action.payload.team;
      break;
    case ACTIONS.GET_BOARD_STATE:
      state.matrix = action.payload.board;
      break;
    default:
      return state;
  }
});
export default matrixReducer;
