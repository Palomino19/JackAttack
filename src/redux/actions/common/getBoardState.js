import { GET_BOARD_STATE } from "../../actions";
function getBoardState(board) {
  return { type: GET_BOARD_STATE, payload: board };
}
export default getBoardState;
