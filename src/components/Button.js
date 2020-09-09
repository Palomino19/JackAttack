import React from "react";
import { connect } from "react-redux";
import nextTurn from "../redux/actions/game/nextTurn";
import dealCard from "../redux/actions/game/dealCard";

const mapStateToProps = (state) => ({
  activePlayer: state.game.activePlayer,
  activeTeam: state.game.activeTeam,
  matrix: state.theMatrix,
  deck: state.game.deck,
});

const mapDispatchToProps = {
  nextTurn,
  dealCard,
};

function DealButton(props) {
  const { activePlayer, activeTeam, nextTurn, dealCard, deck } = props;

  const setupCards = () => {
    dealCard(deck[0], 1, 0);
    dealCard(deck[1], 1, 1);
    dealCard(deck[2], 1, 2);
    dealCard(deck[3], 1, 3);
  };

  const testing = () => {
    console.log("testing");
    console.log("activePlayer: ", activePlayer);
  };

  return (
    <div>
      It is the {activePlayer} st Players Turn
      <button type="button" onClick={() => dealCard(deck[0], 1, activePlayer)}>
        Deal
      </button>
      <button type="button" onClick={() => nextTurn(activePlayer)}>
        Next Turn
      </button>
      TEAM TURN: {activeTeam}
      <button type="button" onClick={() => setupCards()}>
        set up game
      </button>
      <br />
      <button type="button" onClick={() => testing()}>
        testing
      </button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DealButton);
