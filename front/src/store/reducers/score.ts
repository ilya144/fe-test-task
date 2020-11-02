import { IScore, IAction } from "../types";
import { ScoreActions } from "../actions";
import createReducer from "../../utils/createReducer";

const initialState: IScore = {
  ai: null,
  player: null,
  X: null,
  O: null,
  list: null,
  isFetching: false,
  error: null,
};

const ScoreReducer = createReducer<IScore>(initialState, [
  ScoreActions.getScore,
  ScoreActions.resetScore,
]);

export default ScoreReducer;
