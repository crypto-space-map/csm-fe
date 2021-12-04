import { put, takeLatest, call } from 'typed-redux-saga';

import { getDetailInfoCard, getExchangesData } from './api';
import { actions } from './slice';

export function* fetchDetailInfo() {
  try {
    const { data } = yield* call(getDetailInfoCard);

    yield* put(actions.fetchDetialInfoSuccess(data));
  } catch {
    yield* put(actions.fetchDetialInfoFail());
  }
}

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

export function* exchangesDataWorker() {
  try {
    const { data } = yield* call(getExchangesData);

    yield* put(actions.fetchExchangesDataSuccess(data));
  } catch {
    yield* put(actions.fetchExchangesDataFail());
  }
}

export function* detailInfoSaga() {
  yield* takeLatest(actions.fetchDetialInfo, fetchDetailInfo);
  yield* takeLatest(actions.fetchOverviewTradingStock, overviewTradingStockWorker);
  yield* takeLatest(actions.fetchExchangesData, exchangesDataWorker);
}
