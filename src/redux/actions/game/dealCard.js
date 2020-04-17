import { DEAL_CARD } from "../../actions";

function dealCard(card, cardIndex, playerIndex) {
  return { type: DEAL_CARD, payload: { card, cardIndex, playerIndex } };
}

export default dealCard;
