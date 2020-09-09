import { NEXT_TURN } from "../../actions";

function nextTurn(activePlayer) {
  const nextPlayer = activePlayer === 3 ? 0 : activePlayer + 1;
  let nextTeam;
  activePlayer === 0 || activePlayer === 2 ? (nextTeam = 2) : (nextTeam = 1);
  return {
    type: NEXT_TURN,
    payload: { nextPlayer: nextPlayer, nextTeam: nextTeam },
  };
}

export default nextTurn;
