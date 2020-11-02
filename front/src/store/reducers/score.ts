import { IScore, IAction } from "../types";
import { ScoreActions } from "../actions";

const initialState: IScore = {
  ai: null,
  player: null,
  X: null,
  O: null,
  list: null,
  isFetching: false,
  error: null,
};

function ScoreReducer(state: IScore = initialState, action: IAction) {
  switch (action.type) {
    case ScoreActions.getScore.types.fetching:
      return { ...state, isFetching: true, error: null };
    case ScoreActions.getScore.types.success:
      return { ...state, ...action.payload, isFetching: false, error: null };
    case ScoreActions.getScore.types.failure:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case ScoreActions.resetScore.types.fetching:
      return { ...state, isFetching: true, error: null };
    case ScoreActions.resetScore.types.success:
      return { ...state, ...action.payload, isFetching: false, error: null };
    case ScoreActions.resetScore.types.failure:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default ScoreReducer;
