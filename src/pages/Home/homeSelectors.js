// @flow
/* eslint-disable import/prefer-default-export */
import type { State } from '../../app/store/storeTypes';

export const selectCurrencyPairs = (state: State) => state.currencyPairs;
