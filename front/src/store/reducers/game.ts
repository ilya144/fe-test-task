import { IGame, IAction } from "../types";
import { GameActions } from "../actions";

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

function GameReducer(state: IGame = initialState, action: IAction) {
  switch (action.type) {
    case GameActions.getGame.types.request:
      console.log("dispatcher getGame request");
      return state;
    case GameActions.getGame.types.fetching:
      return { ...state, isFetching: true, error: null };
    case GameActions.getGame.types.success:
      return { ...state, ...action.payload, isFetching: false, error: null };
    case GameActions.getGame.types.failure:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case GameActions.move.types.fetching:
      return { ...state, isFetching: true, error: null };
    case GameActions.move.types.success:
      return { ...state, ...action.payload, isFetching: false, error: null };
    case GameActions.move.types.failure:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case GameActions.resetGame.types.fetching:
      return { ...state, isFetching: true, error: null };
    case GameActions.resetGame.types.success:
      return { ...state, ...action.payload, isFetching: false, error: null };
    case GameActions.resetGame.types.failure:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case GameActions.nextGame.types.fetching:
      return { ...state, isFetching: true, error: null };
    case GameActions.nextGame.types.success:
      return { ...state, ...action.payload, isFetching: false, error: null };
    case GameActions.nextGame.types.failure:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default GameReducer;
