// @flow
import React, { PureComponent } from 'react';
import type { CurrencyPairType } from './currencyPairTypes';
import styles from './CurrencyPair.scss';
import Triangle from './Triangle';

type Props = {|
  ...CurrencyPairType,
|};

class CurrencyPair extends PureComponent<Props, {||}> {
  prevBuy: number = 0;

  render() {
    const { pair, buy, sell } = this.props;
    const isPositiveTrend = this.prevBuy < buy;
    this.prevBuy = buy;

    return (
      <section className={styles.currencyPair}>
        <header className={styles.header}>
          <h3>{pair}</h3>
        </header>
        <main className={styles.content}>
          <div>
            {buy}
          </div>
          <Triangle isPositiveTrend={isPositiveTrend} />
          <div>
            {sell}
          </div>
        </main>
      </section>
    );
  }
}

export default CurrencyPair;
