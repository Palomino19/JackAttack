import React from "react";
import styles from "./board.module.css";
import cx from "classnames";
import deck from "../../data/defaultBoardSpaces.json";

function Board(props) {
  const { activePlayer, nextTurn, dealCard, boardSpaces } = props;
  // let decks = _.shuffle(deck);
  return (
    <div className={styles.boardContainer}>
      {/* GAMEBOARD */}
      <div className={styles.board}>
        {/* // Map the deck to the grids on the board */}
        {deck.map((card) => {
          switch (card.suit) {
            case "spades":
              return (
                <div className={cx(styles.boardSpace, styles.spades)}>
                  <p className={styles.cardValue}>{card.value}</p>
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
