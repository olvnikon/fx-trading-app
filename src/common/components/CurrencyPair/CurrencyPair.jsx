// @flow
import React, { PureComponent } from 'react';
import type { CurrencyPairType } from './currencyPairTypes';
import styles from './CurrencyPair.scss';
import Triangle from './Triangle';
import SellRate from './Rate/SellRate';
import BuyRate from './Rate/BuyRate';
import { getMainCurrency } from './currencyPairHelpers';

type Props = {|
  ...CurrencyPairType,
|};

class CurrencyPair extends PureComponent<Props, {||}> {
  prevBuy: number = 0;

  render() {
    const { pair, buy, sell } = this.props;
    const isPositiveTrend = this.prevBuy < buy;
    this.prevBuy = buy;
    const currency = getMainCurrency(pair);

    return (
      <section className={styles.currencyPair}>
        <header className={styles.header}>
          <h3>{pair}</h3>
        </header>
        <main className={styles.content}>
          <SellRate rate={sell} currency={currency} />
          <Triangle isPositiveTrend={isPositiveTrend} />
          <BuyRate rate={buy} currency={currency} />
        </main>
      </section>
    );
  }
}

export default CurrencyPair;
