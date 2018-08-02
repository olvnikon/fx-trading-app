// @flow
import React, { PureComponent } from 'react';
import type { CurrencyPairType } from './currencyPairTypes';

type Props = {|
  ...CurrencyPairType,
|};

class CurrencyPair extends PureComponent<Props, {||}> {
  render() {
    const { pair, buy, sell } = this.props;
    return (
      <div>
        {pair}: {buy} - {sell}
      </div>
    );
  }
}

export default CurrencyPair;
