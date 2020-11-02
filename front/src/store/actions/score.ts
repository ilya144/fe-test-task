import { createAction } from "../../utils";
import { IScore } from "../types";

enum Type {
  GET_SCORE = "GET_SCORE",
  RESET_SCORE = "RESET_SCORE",
}

const getScore = createAction(Type.GET_SCORE, {
  request: () => ({}),
  success: (result: IScore) => ({ ...result }),
  failure: (error: string) => ({ error }),
});

const resetScore = createAction(Type.RESET_SCORE, {
  request: () => ({}),
  success: (result: IScore) => ({ ...result }),
  failure: (error: string) => ({ error }),
});

export const ScoreActions = {
  Type,

  getScore,
  resetScore,
};

export type ScoreActions = Omit<typeof ScoreActions, "Type">;
