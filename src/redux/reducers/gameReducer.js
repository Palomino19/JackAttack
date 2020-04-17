import * as ACTIONS from "../actions";
import deck from "../../data/deck.json";
import _ from "lodash";
import produce from "immer";

const initialState = {
  activePlayer: 1,
  deck,
  // : _.shuffle(deck)
};

const gameReducer = produce((state = initialState, action) => {
  switch (action.type) {
    // case ACTIONS.DRAW_CARD:
    //   break;
    // case ACTIONS.NEXT_TURN:
    //   state.activePlayer + 1;
    //   break;
    case ACTIONS.DEAL_CARD:
      console.log("logging card=====" + JSON.stringify(state.deck.slice(0, 0)));
      state.deck.push(action.payload.card);
      break;
  }

  return state;
});
export default gameReducer;
