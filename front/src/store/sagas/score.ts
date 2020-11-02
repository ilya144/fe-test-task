import { put, call, takeLatest } from "redux-saga/effects";
import { IAction } from "../types";
import { ScoreActions } from "../actions";
import * as api from "../../api";

function* getScoreWorker({ action }: IAction) {
  yield put(action.fetching());
  try {
    const { data, status } = yield call(api.getScore);

    if (data.ok) yield put(action.success(data.result));
    else yield put(action.failure(data.error));
  } catch (error) {
    yield put(action.failure(error.message));
  }
}

function* resetScoreWorker({ action }: IAction) {
  yield put(action.fetching());
  try {
    const { data, status } = yield call(api.resetScore);

    if (data.ok) yield put(action.success(data.result));
    else yield put(action.failure(data.error));
  } catch (error) {
    yield put(action.failure(error.message));
  }
}

export default function* scoreSaga() {
  yield takeLatest(ScoreActions.Type.GET_SCORE, getScoreWorker);
  yield takeLatest(ScoreActions.Type.RESET_SCORE, resetScoreWorker);
}
