import { MAKE_CARD_ACTIVE } from "../../actions";

function makeCardActive(card, cardIndex, playerIndex) {
  return { type: MAKE_CARD_ACTIVE, payload: { card, cardIndex, playerIndex } };
}

export default makeCardActive;
