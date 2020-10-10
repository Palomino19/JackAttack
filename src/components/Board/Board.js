import React, { useEffect } from "react";
import styles from "./board.module.css";
import cx from "classnames";
import { addBoardStateFirebase } from "../../database/firebase.js";
import checkNewScore from "../../Utils/checkNewScore";

function Board(props) {
  const {
    board,
    claimBoardSpace,
    clearActiveCard,
    activePlayer,
    activeTeam,
    playerHand,
  } = props || {};
  useEffect(() => {
    // Update the document title using the browser API
    addBoardStateFirebase(board);
  });

  const executeBoardClaim = (card, rowIndex, columnIndex) => {
    console.log("ACTIVE TEAM", activeTeam);
    claimBoardSpace(card, rowIndex, columnIndex, activePlayer, activeTeam);
    clearActiveCard(activePlayer);
    checkNewScore(activeTeam, rowIndex, columnIndex, board);
  };
  return (
    <div className={styles.boardContainer}>
      <div className={styles.board}>
        {board.map((row, rowIndex) => {
          return row.map((card, columnIndex) => {
            let individualSuit =
              card.suit === "spades"
                ? styles.spades
                : card.suit === "hearts"
                ? styles.hearts
                : card.suit === "clubs"
                ? styles.clubs
                : styles.diamonds;
            return (
              <div
                key={rowIndex * board.length + columnIndex}
                className={cx(styles.boardSpace, individualSuit)}
                onClick=//   ) //     rowIndex //     "rowIndex:    ", //     columnIndex, //     "columnIndex:  ", //   console.log( // {() =>
                // }
                {
                  playerHand[activePlayer].activeCard
                    ? playerHand[activePlayer].activeCard.suit === card.suit &&
                      playerHand[activePlayer].activeCard.value === card.value
                      ? () => executeBoardClaim(card, rowIndex, columnIndex)
                      : null
                    : null
                }
              >
                <p className={styles.cardValue}>
                  <span
                    className={
                      card.isClaimedBy === 1
                        ? styles.claimedGreen
                        : card.isClaimedBy === 2
                        ? styles.claimedBlue
                        : card.isClaimedBy === 3
                        ? styles.freebie
                        : styles.empty
                    }
                  ></span>
                  {card.value}
                </p>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default Board;
