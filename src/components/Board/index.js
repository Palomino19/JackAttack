import Board from "./Board";
import { connect } from "react-redux";
import nextTurn from "../../redux/actions/game/nextTurn";
import dealCard from "../../redux/actions/game/dealCard";

const mapStateToProps = (state) => ({
  activePlayer: state.game.activePlayer,
  matrix: state.theMatrix,
  deck: state.game.deck,
});

const mapDispatchToProps = {
  nextTurn,
  dealCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
