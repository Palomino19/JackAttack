import React from "react";
import styles from "./board.module.css";
import cx from "classnames";

//import actions

function Board(props) {
  const { board, playerHand, claimBoardSpace, activePlayer, deck } = props;
  return (
    <div className={styles.boardContainer}>
      <div className={styles.board}>
        {board.matrix.map((card) => {
          let cardObj = { suit: card.suit, value: card.value };
          switch (card.suit) {
            case "spades":
              return (
                <div
                  className={cx(styles.boardSpace, styles.spades)}
                  onClick={() =>
                    claimBoardSpace(
                      card,
                      board.matrix.indexOf(card),
                      activePlayer,
                      cardObj
                    )
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

            case "diamonds":
              return (
                <div className={cx(styles.boardSpace, styles.diamonds)}>
                  <p className={styles.cardValue}>{card.value}</p>
                </div>
              );

            case "clubs":
              return (
                <div className={cx(styles.boardSpace, styles.clubs)}>
                  <p className={styles.cardValue}>{card.value}</p>
                </div>
              );

            case "hearts":
              return (
                <div className={cx(styles.boardSpace, styles.hearts)}>
                  <p className={styles.cardValue}>{card.value}</p>
                </div>
              );
            default:
              return <div className={cx(styles.boardSpace)}>FREE SPACE</div>;
          }
        })}
      </div>
    </div>
  );
}

export default Board;
