import database from "../../database/firebase";

exports.getBoardStateThunk = function () {
  return (dispatch) => {
    const boardState = [];
    database
      .ref(`/`)
      .once("value", (snap) => {
        snap.forEach((data) => {
          let boardSpace = data.val();
          boardState.push(boardSpace);
        });
      })
      .then(() => dispatch(getBoardState(BoardState)));
  };
};

exports.watchTaskAddedEvent = function (dispatch) {
  database.ref(`/`).on("child_added", (snap) => {
    dispatch(addTask(snap.val()));
  });
};

exports.watchTaskRemovedEvent = function (dispatch) {
  database.ref(`/`).on("child_removed", (snap) => {
    dispatch(removeTask(snap.val()));
  });
};
