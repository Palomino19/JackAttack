import { combineReducers } from "redux";
import players from "./playersReducer";
import matrix from "./matrixReducer";
import game from "./gameReducer";

export const rootReducer = combineReducers({ players, matrix, game });
