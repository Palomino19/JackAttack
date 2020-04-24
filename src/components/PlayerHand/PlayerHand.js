import React from "react";
import styles from "./playerHand.module.css";
import PlayingCard from "../PlayingCard/PlayingCard.js";

function PlayerHand(props) {
  const { activePlayer, playerHand } = props;
  console.log("here are your prop   " + JSON.stringify(playerHand));
  return (
    <div className={styles.playerHandContainer}>
      {playerHand[activePlayer].hand.map((card) => {
        return <PlayingCard suit={card.suit} value={card.value}></PlayingCard>;
      })}
    </div>
  );
}

export default PlayerHand;
