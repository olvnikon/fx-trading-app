// @flow
import React from 'react';
import { compose } from 'redux';
import styles from './Rate.scss';

const mapChunk = (chunk, index) => (
  <span
    key={index} // eslint-disable-line react/no-array-index-key
    className={styles[`chunk-${index + 1}`]}
  >
    {chunk}
  </span>
);
const mapChunks = chunks => chunks.map(mapChunk);
const splitByChunks = value => value.match(/.{1,2}/g) || ['00'];

const mapRightSide = compose(
  mapChunks,
  splitByChunks,
);

const mapLeftSide = leftSide => <span>{`${leftSide}.`}</span>;

const splitRateLeftRight = rate => rate.toString().split('.');

// ToDo: refactor from imperative to declarative
// eslint-disable-next-line import/prefer-default-export
export const mapRate = (rate: number) => {
  const [leftSide, rightSide] = splitRateLeftRight(rate);
  return (
    <span>
      {mapLeftSide(leftSide)}
      {mapRightSide(rightSide)}
    </span>
  );
};
