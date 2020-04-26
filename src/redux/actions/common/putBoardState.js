import { PUT_BOARD_STATE } from "../../actions";
function putBoardState(board) {
  return { type: PUT_BOARD_STATE, board };
}
export default putBoardState;
