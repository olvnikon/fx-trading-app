// @flow
import React from 'react';
import Rate from './Rate';
import styles from './Rate.scss';

type Props = {|
  +currency: string,
  +rate: number,
|};

const BuyRate = ({ currency, ...rest }: Props) => (
  <div className={styles.buyRate}>
    <Rate header={`Buy ${currency}`} {...rest} />
  </div>
);

export default BuyRate;
