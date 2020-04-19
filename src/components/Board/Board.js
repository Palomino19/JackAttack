import React from "react";
import styles from "./board.module.css";
import _ from "lodash";
import deck from "../../data/defaultBoardSpaces.json";

function Board(props) {
  const { activePlayer, nextTurn, dealCard, boardSpaces } = props;
  return (
    <div className={styles.boardContainer}>
      {/* GAMEBOARD */}
      <div className={styles.board}>
        {/* // Map the deck to the grids on the board */}
        {deck.map((card) => {
          // switch(card.suit){
          //   case hearts
          //   break;
          // }
          return (
            <div className={styles.boardSpace}>
              {card.value} of {card.suit}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
