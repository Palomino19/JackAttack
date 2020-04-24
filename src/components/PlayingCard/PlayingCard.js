import React from "react";
import cx from "classnames";
import styles from "./playingCard.module.css";

function PlayingCard(props) {
  const { value, suit } = props;
  switch (suit) {
    case "spades":
      return (
        <div className={cx(styles.card, styles.spades)}>
          <p className={styles.cardValue}>
            {value} of {suit}
          </p>
        </div>
      );

    case "diamonds":
      return (
        <div className={cx(styles.card, styles.diamonds)}>
          <p className={styles.cardValue}>
            {value} of {suit}
          </p>
        </div>
      );

    case "clubs":
      return (
        <div className={cx(styles.card, styles.clubs)}>
          <p className={styles.cardValue}>
            {value} of {suit}
          </p>
        </div>
      );

    case "hearts":
      return (
        <div className={cx(styles.card, styles.hearts)}>
          <p className={styles.cardValue}>
            {value} of {suit}
          </p>
        </div>
      );
    default:
      return <div className={cx(styles.card)}>FREE SPACE</div>;
  }
}

export default PlayingCard;
