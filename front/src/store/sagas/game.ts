import { put, call, takeLatest, select } from "redux-saga/effects";
import { IAction } from "../types";
import { GameActions } from "../actions";
import * as api from "../../api";

function* getGameWorker({ action }: IAction) {
  yield put(action.fetching());
  try {
    const { data, status } = yield call(api.getGame);

    if (data.ok) yield put(action.success(data.result));
    else yield put(action.failure(data.error));
  } catch (error) {
    yield put(action.failure(error.message));
  }
}

function* moveWorker({ action, payload }: IAction) {
  yield put(action.fetching());
  try {
    const { data, status } = yield call(api.move, payload.index);

    if (data.ok) yield put(action.success(data.result));
    else yield put(action.failure(data.error));
  } catch (error) {
    yield put(action.failure(error.message));
  }
}

function* resetGameWorker({ action }: IAction) {
  yield put(action.fetching());
  try {
    const { data, status } = yield call(api.resetGame);

    if (data.ok)
      yield put(action.success({ ...data.result, winner: null, end: null }));
    else yield put(action.failure(data.error));
  } catch (error) {
    yield put(action.failure(error.message));
  }
}

function* nextGameWorker({ action }: IAction) {
  yield put(action.fetching());
  try {
    const { data, status } = yield call(api.nextGame);

    if (data.ok)
      yield put(action.success({ ...data.result, winner: null, end: null }));
    else yield put(action.failure(data.error));
  } catch (error) {
    yield put(action.failure(error.message));
  }
}

export default function* gameSaga() {
  yield takeLatest(GameActions.Type.GET_GAME, getGameWorker);
  yield takeLatest(GameActions.Type.MOVE, moveWorker);
  yield takeLatest(GameActions.Type.RESET_GAME, resetGameWorker);
  yield takeLatest(GameActions.Type.NEXT_GAME, nextGameWorker);
}
