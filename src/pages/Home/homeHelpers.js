// @flow
/* eslint-disable import/prefer-default-export */
import type { CurrencyPairType } from '../../common/components/CurrencyPair/currencyPairTypes';
import {
  MAX_MULTIPLIER,
  MIN_MULTIPLIER,
  PAIR_CHANGE_PROBABILITY,
} from './homeConstants';

const multiplyByRandomValue = (max: number, min: number) =>
  (value: number): number => Number((value * Math.random() * (min - max) + max).toFixed(5));
const shouldPairUpdate = (): boolean => Math.random() > PAIR_CHANGE_PROBABILITY;

const multiplyByRandom = multiplyByRandomValue(MIN_MULTIPLIER, MAX_MULTIPLIER);
const getPairWithUpdatedRate = pair => ({
  ...pair,
  sell: multiplyByRandom(pair.sell),
  buy: multiplyByRandom(pair.buy),
});

export const mapPairs = (pair: CurrencyPairType): CurrencyPairType => (
  shouldPairUpdate() ? getPairWithUpdatedRate(pair) : pair
);
