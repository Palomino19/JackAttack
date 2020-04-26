import React from "react";
import cx from "classnames";
import styles from "./playingCard.module.css";

function PlayingCard(props) {
  const {
    suit,
    value,
    // ,makeCardActive, activePlayer
  } = props;
  let individualSuit =
    suit === "spades"
      ? styles.spades
      : suit === "hearts"
      ? styles.hearts
      : suit === "clubs"
      ? styles.clubs
      : styles.diamonds;
  return (
    <div
      // onClick={makeCardActive({ sui: suit, value: value }, 1, activePlayer)}
      className={cx(styles.card, individualSuit)}
    >
      <p className={styles.cardValue}>
        {value === "J" && (suit === "spades" || suit === "hearts")
          ? `One eyed Jack`
          : value === "J" && (suit === "clubs" || suit === "diamonds")
          ? `Two eyed Jack`
          : `${value} of ${suit}`}
      </p>
    </div>
  );
}

export default PlayingCard;
