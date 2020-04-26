import React from "react";
import styles from "./board.module.css";
import cx from "classnames";

//import actions

function Board(props) {
  const {
    board,
    claimBoardSpace,
    activePlayer,
    playerHand,
    player1ActiveCard,
  } = props;

  function spaceChecker() {
    // To play a regular card:
    //
    // boardspace = (boardspace.suit= cardPLayed.suit &&
    // boardspace.value = card.value && isLocked=false &&
    // isClaimedBy=0)
    //
    // playerHand[activePLayer].hand.includes({suit =
    // boardspace.suit && value  = boardspace.value}) = true
    //
    // Trigger ClaimBoardSPace() && GoalChecker()
    // To play a TWO EYED JACK
    //
    // boardspace = isLocked=false, isClaimedBy=0
    //
    // playerHand[activePLayer].hand.includes({suit= "clubs"
    // || diamonds", value="J"})
    //
    // Trigger ClaimBoardSPace() && GoalChecker()
    // to play a ONE EYED JACK
    //
    //  boardspace = isLocked=false, isClaimedBy !=
    //  (activePlayer || 3)
    //
    // playerHand[activePLayer].hand.includes({suit= "spades"
    // || hearts", value="J"})
    //
    // Trigger UnclaimBoardSpace()
    //to play JOKER
    //
    // boardspace = isLocked=false, isOccupied=0
    //
    // playerHand[activePLayer].hand.includes({suit= "null
    // || hearts", value="Joker"})
    //
    // TriggerClaimBoardSPace() && GoalChecker() ||  Trigger UnclaimBoardSpace()
    // if(playerHand[activePlayer].hand)
  }

  return (
    <div className={styles.boardContainer}>
      <div className={styles.board}>
        {board.matrix.map((card, index) => {
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
                playerHand[activePlayer].hand.find((playerHandCard) => {
                  console.log(
                    `Player Card is the: ${playerHandCard.value} of ${playerHandCard.suit}`
                  );
                  console.log(
                    `Board Space Card is the: ${card.value} of ${card.suit}`
                  );
                  return (
                    playerHandCard.suit == card.suit &&
                    playerHandCard.value == card.value
                  );
                })
                  ? () =>
                      claimBoardSpace(
                        card,
                        board.matrix.indexOf(card),
                        activePlayer
                        // cardObj
                      )
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
