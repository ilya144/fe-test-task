export interface IGame {
  player: string;
  ai: string;
  board: Array<Array<string>>;
  nextMove: string;
  end?: boolean;
  winner?: string;
  isFetching: false;
  error: null;
}
