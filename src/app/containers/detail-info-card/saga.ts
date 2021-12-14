import { put, takeLatest, call } from 'typed-redux-saga';

import { toast } from 'app/components';

import { getExchangesData } from './api';
import { actions } from './slice';

export function* overviewTradingStockWorker() {
  try {
    // TODO сделать реальный запрос
    // const { data } = yield* call(getDetailInfoCard);
    const data = 'HUOBI';
    yield* put(actions.fetchExchangesDataSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield* put(actions.fetchOverviewTradingStockError(message));
      toast(message, 'error');
    }
  }
}

export function* exchangesDataWorker(action: ReturnType<typeof actions.fetchExchangesData>) {
  try {
    const { data } = yield* call(getExchangesData, 'solana', action.payload);

    yield* put(actions.fetchExchangesDataSuccess(data));
  } catch {
    yield* put(actions.fetchExchangesDataFail());
  }
}

export function* detailInfoSaga() {
  yield* takeLatest(actions.fetchOverviewTradingStock, overviewTradingStockWorker);
  yield* takeLatest(actions.fetchExchangesData, exchangesDataWorker);
}
