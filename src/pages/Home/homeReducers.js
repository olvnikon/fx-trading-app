// @flow
import { createConditionalSliceReducer } from '../../common/utils/reducerUtils';
import currencyPairsMock from '../../data/mocks/currencyPairs';
import { FETCH_PAIRS } from './homeConstants';
import type { HomeStateType } from './homeTypes';

const defaultState: HomeStateType = [...currencyPairsMock];

const homeReducer = createConditionalSliceReducer('currencyPairs', {
  [FETCH_PAIRS]: (state, payload) => ([...payload]),
}, defaultState);

export default homeReducer;
