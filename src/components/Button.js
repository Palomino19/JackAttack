import React from "react";
import { connect } from "react-redux";
import nextTurn from "../redux/actions/game/nextTurn";
import dealCard from "../redux/actions/game/dealCard";

const mapStateToProps = (state) => ({
  activePlayer: state.game.activePlayer,
  matrix: state.theMatrix,
  deck: state.game.deck,
});

const mapDispatchToProps = {
  nextTurn,
  dealCard,
};
function DealButton(props) {
  const { activePlayer, nextTurn, dealCard, deck } = props;
  return (
    <div>
      It is the {activePlayer}st Players Turn
      <button type="button" onClick={() => dealCard(deck[0], 1, activePlayer)}>
        Deal
      </button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DealButton);
