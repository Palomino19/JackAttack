import { TEAM_SCORES } from "../../actions";

function teamScores(team) {
  return { type: TEAM_SCORES, payload: { team: team, newScore } };
}

export default teamScores;
