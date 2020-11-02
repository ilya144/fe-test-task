export interface IScore {
  ai: number;
  player: number;
  X: number;
  O: number;
  list: Array<{ ts: number; winner?: string; team?: string }>;
  isFetching: false;
  error: null;
}
