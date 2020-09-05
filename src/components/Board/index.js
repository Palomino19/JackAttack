import Board from "./Board";
import { connect } from "react-redux";
import nextTurn from "../../redux/actions/game/nextTurn";
import dealCard from "../../redux/actions/game/dealCard";
import claimBoardSpace from "../../redux/actions/theMatrix/claimBoardspace";
import clearActiveCard from "../../redux/actions/players/clearActiveCard";
import { getBoardStateThunk } from "../../redux/thunks/getBoardStateThunk";

const mapStateToProps = (state) => ({
  activePlayer: state.game.activePlayer,
  board: state.matrix.matrix,
  deck: state.game.deck,
  playerHand: state.players.players,
  player1ActiveCard: state.players.players[0].activeCard,
});

const mapDispatchToProps = {
  nextTurn,
  dealCard,
  claimBoardSpace,
  getBoardStateThunk,
  clearActiveCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
