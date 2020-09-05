import { CLEAR_ACTIVE_CARD } from "../../actions";

function clearActiveCard(playerIndex) {
  return { type: CLEAR_ACTIVE_CARD, payload: { playerIndex } };
}

export default clearActiveCard;
