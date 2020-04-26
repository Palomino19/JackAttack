import * as ACTIONS from "../actions";
import produce from "immer";

const initialState = {
  players: [
    { hand: [], activeCard: null },
    { hand: [], activeCard: null },
    { hand: [], activeCard: null },
    { hand: [], activeCard: null },
  ],
};

const playersReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DEAL_CARD:
      state.players[action.payload.playerIndex].hand.push(action.payload.card);
      break;
    case ACTIONS.MAKE_CARD_ACTIVE:
      state.players[action.payload.playerIndex].activeCard =
        action.payload.card;
    case ACTIONS.CLAIM_BOARD_SPACE:
      const foundIndex = state.players[
        action.payload.playerIndex
      ].hand.findIndex(
        (card) =>
          card.suit === action.payload.card.suit &&
          card.value === action.payload.card.value
      );
      state.players[action.payload.playerIndex].hand.splice(foundIndex, 1);
      break;
    default:
      return state;
  }
});

export default playersReducer;
