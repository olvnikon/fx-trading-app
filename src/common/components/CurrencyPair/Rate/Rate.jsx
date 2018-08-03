// @flow
import React from 'react';
import styles from './Rate.scss';
import { mapRate } from './rateHelpers';

type Props = {|
  +rate: number,
  +header: string,
|};

const Rate = ({ rate, header }: Props) => (
  <section className={styles.rate}>
    <header>
      {header}
    </header>
    <main>
      {mapRate(rate)}
    </main>
  </section>
);

export default Rate;
