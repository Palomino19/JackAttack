import PlayerHand from "./PlayerHand";
import { connect } from "react-redux";
import nextTurn from "../../redux/actions/game/nextTurn";
import dealCard from "../../redux/actions/game/dealCard";

const mapStateToProps = (state) => ({
  activePlayer: state.game.activePlayer,
  board: state.theMatrix,
  deck: state.game.deck,
  playerHand: state.players.players,
});

const mapDispatchToProps = {
  nextTurn,
  dealCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerHand);
