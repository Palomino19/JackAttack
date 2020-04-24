import * as ACTIONS from "../actions";
import produce from "immer";

const initialState = {
  players: [{ hand: [] }, { hand: [] }, { hand: [] }, { hand: [] }],
};

const playersReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DEAL_CARD:
      state.players[action.payload.playerIndex].hand.push(action.payload.card);
      break;
    case ACTIONS.CLAIM_BOARD_SPACE:
      state.players[action.payload.playerIndex].hand.filter(
        (card) => card !== action.payload.cardObj
      );
      break;
    default:
      return state;
  }
});

export default playersReducer;
