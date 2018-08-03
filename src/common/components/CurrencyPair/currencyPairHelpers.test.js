// @flow
import { getMainCurrency } from './currencyPairHelpers';

describe('getMainCurrency', () => {
  test('should return the first currency in a pair', () => {
    const firstCurrency = 'USD';
    const pair = `${firstCurrency} EUR`;

    expect(getMainCurrency(pair)).toBe(firstCurrency);
  });

  test('should return the whole string if no pair', () => {
    const notAPair = 'USDEUR';

    expect(getMainCurrency(notAPair)).toBe(notAPair);
  });
});
