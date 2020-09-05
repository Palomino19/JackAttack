import PlayerHand from "./PlayerHand";
import { connect } from "react-redux";
import nextTurn from "../../redux/actions/game/nextTurn";
import dealCard from "../../redux/actions/game/dealCard";
import makeCardActive from "../../redux/actions/players/makeCardActive";
import clearActiveCard from "../../redux/actions/players/clearActiveCard";

const mapStateToProps = (state) => ({
  activePlayer: state.game.activePlayer,
  board: state.theMatrix,
  deck: state.game.deck,
  playerHand: state.players.players,
  player1ActiveCard: state.players.players[0].activeCard,
  player2ActiveCard: state.players.players[1].activeCard,
  player3ActiveCard: state.players.players[2].activeCard,
  player4ActiveCard: state.players.players[3].activeCard,
  player1Hand: state.players.players[0].hand,
  player2Hand: state.players.players[1].hand,
  player3Hand: state.players.players[2].hand,
  player4Hand: state.players.players[3].hand,
});

const mapDispatchToProps = {
  nextTurn,
  dealCard,
  makeCardActive,
  clearActiveCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerHand);
