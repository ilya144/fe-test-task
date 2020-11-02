import { createAction } from "../../utils";
import { IGame } from "../types";

enum Type {
  GET_GAME = "GET_GAME",
  MOVE = "MOVE",
  RESET_GAME = "RESET_GAME",
  NEXT_GAME = "NEXT_GAME",
}

const getGame = createAction(Type.GET_GAME, {
  request: () => ({}),
  success: (result: IGame) => ({ ...result }),
  failure: (error: string) => ({ error }),
});

const move = createAction(Type.MOVE, {
  request: (index: number) => ({ index }),
  success: (result: IGame) => ({ ...result }),
  failure: (error: string) => ({ error }),
});

const resetGame = createAction(Type.RESET_GAME, {
  request: () => ({}),
  success: (result: IGame) => ({ ...result }),
  failure: (error: string) => ({ error }),
});

const nextGame = createAction(Type.NEXT_GAME, {
  request: () => ({}),
  success: (result: IGame) => ({ ...result }),
  failure: (error: string) => ({ error }),
});

export const GameActions = {
  Type,

  getGame,
  move,
  resetGame,
  nextGame,
};

export type GameActions = Omit<typeof GameActions, "Type">;
