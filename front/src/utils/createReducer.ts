import { IAction } from "../store/types";
import { IActionCreator } from "./createAction";

enum Variant {
  fetching = "fetching",
  success = "success",
  failure = "failure",
}

export default function createReducer<T>(
  initialState: T,
  actionCreatorList: Array<IActionCreator>
) {
  return (state: T = initialState, action: IAction) => {
    for (const actionCreator of actionCreatorList) {
      if (Object.values(actionCreator.types).includes(action.type))
        switch (action.variant) {
          case Variant.fetching:
            return { ...state, isFetching: true, error: null };
          case Variant.success:
            return {
              ...state,
              ...action.payload,
              isFetching: false,
              error: null,
            };
          case Variant.failure:
            return {
              ...state,
              error: action.payload,
              isFetching: false,
            };
          default:
            return state;
        }
    }
    return state;
  };
}
