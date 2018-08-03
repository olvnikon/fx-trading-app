// @flow
import type { CurrencyPairType } from '../../common/components/CurrencyPair/currencyPairTypes';

const currencyPairsMock: $ReadOnlyArray<CurrencyPairType> = [
  { pair: 'USD CHF', buy: 0.99143, sell: 0.99043 },
  { pair: 'GBP USD', buy: 1.28495, sell: 1.2836 },
  { pair: 'GBP CHF', buy: 1.27378, sell: 1.27147 },
  { pair: 'EUR SEK', buy: 9.632, sell: 9.6055 },
  { pair: 'USD JPY', buy: 110.467, sell: 110.417 },
  { pair: 'EUR JPY', buy: 120.589, sell: 120.491 },
];

export default currencyPairsMock;
