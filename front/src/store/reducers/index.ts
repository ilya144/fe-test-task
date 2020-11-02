import { combineReducers, Reducer } from "redux";
import { IGame, IScore } from "../types";
import gameReducer from "./game";
import scoreReducer from "./score";

export interface IRootState {
  game: IGame;
  score: IScore;
}

const rootReducer: Reducer<IRootState> = combineReducers<IRootState>({
  game: gameReducer,
  score: scoreReducer,
});

export default rootReducer;
