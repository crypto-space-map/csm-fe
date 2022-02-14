import { put, takeLatest, call } from 'typed-redux-saga';

import { getExchangesData, getProjectData, getSocialData, getFundsData } from './api';
import { actions } from './slice';

export function* overviewTradingStockWorker() {
  try {
    // TODO сделать реальный запрос
    // const { data } = yield* call(getDetailInfoCard);
    const data = 'HUOBI';
    yield* put(actions.fetchOverviewTradingStockSuccess(data));
  } catch {
    yield* put(actions.fetchOverviewTradingStockFail());
  }
}

export function* exchangesDataWorker(action: ReturnType<typeof actions.fetchExchangesData>) {
  try {
    const { data } = yield* call(getExchangesData, action.payload);
    yield* put(actions.setExchangesPage(action.payload.page));
    yield* put(actions.fetchExchangesDataSuccess(data));
  } catch {
    yield* put(actions.fetchExchangesDataFail());
  }
}

export function* fundsDataWorker(action: ReturnType<typeof actions.fetchFundsData>) {
  try {
    const { data } = yield* call(getFundsData, action.payload);
    yield* put(actions.fetchFundsDataSuccess(data));
  } catch {
    yield* put(actions.fetchFundsDataFail());
  }
}

export function* projectDataWorker(action: ReturnType<typeof actions.fetchProjectData>) {
  try {
    const { data } = yield* call(getProjectData, action.payload);
    yield* put(actions.fetchProjectDataSuccess(data));
  } catch {
    yield* put(actions.fetchProjectDataFail());
  }
}

export function* fetchSocialDataWorker(action: ReturnType<typeof actions.fetchSocialData>) {
  try {
    const { data } = yield* call(getSocialData, action.payload);
    yield* put(actions.fetchSocialDataSuccess(data));
  } catch {
    yield* put(actions.fetchSocialDataFail());
  }
}

export function* detailInfoSaga() {
  yield* takeLatest(actions.fetchOverviewTradingStock, overviewTradingStockWorker);
  yield* takeLatest(actions.fetchExchangesData, exchangesDataWorker);
  yield* takeLatest(actions.fetchProjectData, projectDataWorker);
  yield* takeLatest(actions.fetchSocialData, fetchSocialDataWorker);
  yield* takeLatest(actions.fetchFundsData, fundsDataWorker);
}
