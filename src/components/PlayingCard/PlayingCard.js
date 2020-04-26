import React from "react";
import cx from "classnames";
import styles from "./playingCard.module.css";

function PlayingCard(props) {
  const { suit, value, makeCardActive } = props;
  switch (suit) {
    case "spades":
      return (
        <div className={cx(styles.card, styles.spades)}>
          <p className={styles.cardValue}>
            {value === "J" && suit === ("spades" || "hearts")
              ? `One eyed Jack`
              : value === "J" && suit === ("clubs" || "diamonds")
              ? `Two eyed Jack`
              : `${value} of ${suit}`}
          </p>
        </div>
      );

    case "diamonds":
      return (
        <div className={cx(styles.card, styles.diamonds)}>
          <p className={styles.cardValue}>
            {value === "J" && suit === ("spades" || "hearts")
              ? `One eyed Jack`
              : value === "J" && suit === ("clubs" || "diamonds")
              ? `Two eyed Jack`
              : `${value} of ${suit}`}
          </p>
        </div>
      );

    case "clubs":
      return (
        <div className={cx(styles.card, styles.clubs)}>
          <p className={styles.cardValue}>
            {value === "J" && suit === ("spades" || "hearts")
              ? `One eyed Jack`
              : value === "J" && suit === ("clubs" || "diamonds")
              ? `Two eyed Jack`
              : `${value} of ${suit}`}
          </p>
        </div>
      );

    case "hearts":
      return (
        <div className={cx(styles.card, styles.hearts)}>
          <p className={styles.cardValue}>
            {value === "J" && suit === ("spades" || "hearts")
              ? `One eyed Jack`
              : value === "J" && suit === ("clubs" || "diamonds")
              ? `Two eyed Jack`
              : `${value} of ${suit}`}
          </p>
        </div>
      );
    case "wild":
      return (
        <div className={cx(styles.card, styles.hearts)}>
          <p className={styles.cardValue}>
            You got a {value}! (remove/wildcard)
          </p>
        </div>
      );
    default:
      return <div className={cx(styles.card)}>FREE SPACE</div>;
  }
}

export default PlayingCard;
