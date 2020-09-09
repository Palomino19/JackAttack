import { CLAIM_BOARD_SPACE } from "../../actions";

function claimBoardSpace(card, cardBoardIndex, activePlayer, team) {
  console.log("active player1: ", activePlayer);
  console.log("claims team: ", team);
  return {
    type: CLAIM_BOARD_SPACE,
    payload: { card, cardBoardIndex, activePlayer, team },
  };
}
export default claimBoardSpace;
