// @flow
/* eslint-disable import/prefer-default-export */
import type { CurrencyPairType } from '../../common/components/CurrencyPair/currencyPairTypes';
import { FETCH_PAIRS } from './homeConstants';

type UpdatePairsActionType = {|
  +type: typeof FETCH_PAIRS, +payload: $ReadOnlyArray<CurrencyPairType>,
|};
type UpdatePairsType = (pairs: $ReadOnlyArray<CurrencyPairType>) => UpdatePairsActionType;
export const updatePairs: UpdatePairsType = pairs => ({
  type: FETCH_PAIRS,
  payload: pairs,
});
