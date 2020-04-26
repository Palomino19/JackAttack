import React from "react";
import styles from "./playerHand.module.css";
import PlayingCard from "../PlayingCard/";

function PlayerHand(props) {
  const { activePlayer, playerHand, player1ActiveCard } = props;
  return (
    <div className={styles.playerHandContainer}>
      <div>
        <h1> This is your Hand:</h1>
        {playerHand[activePlayer].hand.map((card) => {
          return (
            <PlayingCard suit={card.suit} value={card.value}></PlayingCard>
          );
        })}
      </div>

      <h2> This is the card you will play:</h2>
      <PlayingCard></PlayingCard>
      <h2>
        once you have decided you want to play this card click on the boardspace
        that you want to use that card on!
      </h2>
    </div>
  );
}

export default PlayerHand;
