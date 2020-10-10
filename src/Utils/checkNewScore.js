import _ from "lodash";

const checkNewScore = (currentTeam, rowIndex, columnIndex, board) => {
  console.log("current Team: ", currentTeam);
  console.log("current space: ", [rowIndex, columnIndex]);
  // let i;
  // for (i = 1; i < 5; i++) {
  //   console.log(
  //     "South East Spaces",
  //     board[_.clamp(rowIndex + i, 0, 9)][_.clamp(columnIndex + i, 0, 9)]
  //   );
  // }
  // for (i = 1; i < 5; i++) {
  //   console.log(
  //     "East Spaces: ",
  //     board[rowIndex][_.clamp(columnIndex + i, 0, 9)]
  //   );
  // }

  let xLowerBound = _.clamp(rowIndex - 4, 0, 9);
  let xUpperBound = _.clamp(rowIndex + 4, 0, 9);
  let yLowerBound = _.clamp(columnIndex - 4, 0, 9);
  let yUpperbound = _.clamp(columnIndex + 4, 0, 9);

  console.log([xLowerBound, yLowerBound], [xUpperBound, yUpperbound]);
};

export default checkNewScore;
