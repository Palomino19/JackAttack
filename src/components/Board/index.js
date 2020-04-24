import Board from "./Board";
import { connect } from "react-redux";
import nextTurn from "../../redux/actions/game/nextTurn";
import dealCard from "../../redux/actions/game/dealCard";
import claimBoardSpace from "../../redux/actions/theMatrix/claimBoardspace";

const mapStateToProps = (state) => ({
  activePlayer: state.game.activePlayer,
  board: state.matrix,
  deck: state.game.deck,
  playerHand: state.players.players,
});

const mapDispatchToProps = {
  nextTurn,
  dealCard,
  claimBoardSpace,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
