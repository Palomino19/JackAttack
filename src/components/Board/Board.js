import React from "react";
// import styles from "./board.modules.scss";

function Board(props) {
  const { activePlayer, nextTurn, dealCard, deck } = props;
  return (
    <div>
      {activePlayer}
      <button type="button" onClick={() => dealCard(deck[0], 1, activePlayer)}>
        Pass
      </button>
    </div>
  );
}

export default Board;
