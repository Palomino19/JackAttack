import { CLAIM_BOARD_SPACE } from "../../actions";

function claimBoardSpace(card, cardBoardIndex, playerIndex, cardObj) {
  return {
    type: CLAIM_BOARD_SPACE,
    payload: { card, cardBoardIndex, playerIndex, cardObj },
  };
}
export default claimBoardSpace;
