import { all } from "redux-saga/effects";
import gameSaga from "./game";
import scoreSaga from "./score";

export default function* rootSaga() {
  yield all([gameSaga(), scoreSaga()]);
}
