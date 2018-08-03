// @flow
import React from 'react';
import styles from './Rate.scss';

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
// eslint-disable-next-line import/prefer-default-export
export const mapRate = (rate: number) => {
  const [leftSide, rightSide] = rate.toString().split('.');
  const leftLayout = <span>{`${leftSide}.`}</span>;
  const chunks = rightSide.match(/.{1,2}/g) || ['00'];
  const rightLayout = mapRightSide(chunks);
  return <span>{leftLayout}{rightLayout}</span>;
};
