import React from "react";
import styles from "./playerHand.module.css";
import PlayingCard from "../PlayingCard/";

function PlayerHand(props) {
  const { activePlayer, playerHand, player2ActiveCard, makeCardActive } = props;
  return (
    <div className={styles.playerHandContainer}>
      <div>
        <h1> This is your Hand:</h1>
        {playerHand[activePlayer].hand.map((card, index) => {
          const activatedCard = { suit: card.suit, value: card.value };
          return (
            <div
              key={index}
              onClick={() => makeCardActive(activatedCard, 1, activePlayer)}
            >
              <PlayingCard suit={card.suit} value={card.value}></PlayingCard>
            </div>
          );
        })}
      </div>

      <h2> This is the card you will play:</h2>
      {playerHand[activePlayer].activeCard ? (
        <PlayingCard
          suit={playerHand[activePlayer].activeCard.suit}
          value={playerHand[activePlayer].activeCard.value}
        ></PlayingCard>
      ) : (
        <p>You have not chosen a card to play yet.</p>
      )}

      <h3>
        once you have decided you want to play this card click on the boardspace
        that you want to use that card on!
      </h3>
    </div>
  );
}

export default PlayerHand;
