// @flow
import React from 'react';
import Rate from './Rate';
import styles from './Rate.scss';

type Props = {|
  +currency: string,
  +rate: number,
|};

const SellRate = ({ currency, ...rest }: Props) => (
  <div className={styles.sellRate}>
    <Rate header={`Sell ${currency}`} {...rest} />
  </div>
);

export default SellRate;
