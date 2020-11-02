import { IGame, IAction } from "../types";
import { GameActions } from "../actions";
import createReducer from "../../utils/createReducer";

const initialState: IGame = {
  player: null,
  ai: null,
  board: null,
  nextMove: null,
  end: null,
  winner: null,
  isFetching: false,
  error: null,
};

const GameReducer = createReducer<IGame>(initialState, [
  GameActions.getGame,
  GameActions.move,
  GameActions.resetGame,
  GameActions.nextGame,
]);

export default GameReducer;
