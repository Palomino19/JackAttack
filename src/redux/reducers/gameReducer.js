import * as ACTIONS from "../actions";
import newDeck from "../../Data/deck.json";
import _ from "lodash";
import produce from "immer";

const initialState = {
  activePlayer: 0,
  activeTeam: 1,
  deck: _.shuffle(newDeck),
};

const gameReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DRAW_CARD:
      break;
    case ACTIONS.NEXT_TURN:
      state.activePlayer = action.payload.nextPlayer;
      state.activeTeam = action.payload.nextTeam;
      break;
    case ACTIONS.DEAL_CARD:
      state.deck.shift();
      break;
    default:
      return state;
  }
});
export default gameReducer;
