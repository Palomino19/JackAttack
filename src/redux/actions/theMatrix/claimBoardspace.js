import { CLAIM_BOARD_SPACE } from "../../actions";

function claimBoardSpace(card, rowIndex, columnIndex, activePlayer, team) {
  console.log("active player1: ", activePlayer);
  console.log("claims team: ", team);
  return {
    type: CLAIM_BOARD_SPACE,
    payload: { card, rowIndex, columnIndex, activePlayer, team },
  };
}
export default claimBoardSpace;
