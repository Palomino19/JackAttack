import React, { useEffect } from "react";
import styles from "./board.module.css";
import cx from "classnames";
import { addBoardStateFirebase } from "../../database/firebase.js";
import firebase from "firebase";

function Board(props) {
  const {
    board,
    claimBoardSpace,
    clearActiveCard,
    activePlayer,
    playerHand,
    player1ActiveCard,
  } = props;
  useEffect(() => {
    // Update the document title using the browser API
    addBoardStateFirebase(board);
  });

  const executeBoardClaim = (card) => {
    claimBoardSpace(card, board.indexOf(card), activePlayer);
    clearActiveCard(activePlayer);
  };
  return (
    <div className={styles.boardContainer}>
      <div className={styles.board}>
        {board.map((card, index) => {
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
              key={index}
              className={cx(styles.boardSpace, individualSuit)}
              onClick={
                playerHand[activePlayer].activeCard
                  ? playerHand[activePlayer].activeCard.suit === card.suit &&
                    playerHand[activePlayer].activeCard.value === card.value
                    ? () => executeBoardClaim(card)
                    : undefined
                  : undefined
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
        })}
      </div>
    </div>
  );
}

export default Board;
