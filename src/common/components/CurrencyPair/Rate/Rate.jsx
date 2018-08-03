// @flow
import React from 'react';
import styles from './Rate.scss';

type Props = {|
  +rate: number,
  +header: string,
|};

const mapRightSide = chunks => (
  chunks.map((chunk, index) => (
    <span
      key={index} // eslint-disable-line react/no-array-index-key
      className={styles[`chunk-${index + 1}`]}
    >
      {chunk}
    </span>
  )));

// ToDo: refactor from imperative to declarative
const mapRate = (rate) => {
  const [leftSide, rightSide] = rate.toString().split('.');
  const leftLayout = <span>{`${leftSide}.`}</span>;
  const chunks = rightSide.match(/.{1,2}/g) || ['00'];
  const rightLayout = mapRightSide(chunks);
  return <span>{leftLayout}{rightLayout}</span>;
};

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
