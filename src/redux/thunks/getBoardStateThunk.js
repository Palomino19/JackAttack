// exports.getBoardStateThunk = function () {
//   return (dispatch) => {
//     const boardState = [];
//     database
//       .ref(`/`)
//       .once("value", (snap) => {
//         snap.forEach((data) => {
//           let boardSpace = data.val();
//           boardState.push(boardSpace);
//         });
//       })
//       .then(() => dispatch(getBoardState(BoardState)));
//   };
// };
