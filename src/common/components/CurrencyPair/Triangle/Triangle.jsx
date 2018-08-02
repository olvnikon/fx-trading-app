// @flow
import React from 'react';
import styles from './Triangle.scss';

type Props = {|
  +isPositiveTrend: boolean,
|};

const Triangle = ({ isPositiveTrend }: Props) => (
  <div className={isPositiveTrend ? styles.positive : styles.negative} />
);

export default Triangle;
