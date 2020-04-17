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
  }

  return state;
});

export default playersReducer;
