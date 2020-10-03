import { all, call } from 'redux-saga/effects';
import CurrencyConverterSaga from './/currencyconverter';

import CurrencyListSaga from './currencyList';

function* watchAll() {
  yield all([
    call(CurrencyConverterSaga),

    call(CurrencyListSaga)
  ]);
}

export default watchAll;