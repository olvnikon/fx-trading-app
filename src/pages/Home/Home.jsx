// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { HomeStateType } from './homeTypes';
import type { State } from '../../app/store/storeTypes';
import CurrencyPair from '../../common/components/CurrencyPair/CurrencyPair';
import { selectCurrencyPairs } from './homeSelectors';
import { updatePairs } from './homeActions';
import { mapPairs } from './homeHelpers';
import { REFRESH_TIME } from './homeConstants';

type ReduxProps = {|
  +currencyPairs: HomeStateType,
|};

type ReduxDispatchedProps = {|
  +updatePairs: typeof updatePairs,
|};

type Props = ReduxProps & ReduxDispatchedProps;

class Home extends PureComponent<Props, {||}> {
  componentDidMount() {
    this.randomlyUpdatePairs();
  }

  randomlyUpdatePairs() {
    setTimeout(() => {
      const { updatePairs: update, currencyPairs } = this.props;
      update(currencyPairs.map(mapPairs));
      this.randomlyUpdatePairs();
    }, REFRESH_TIME);
  }

  render() {
    const { currencyPairs } = this.props;
    return (
      <div>
        { /* eslint-disable-next-line react/no-array-index-key */ }
        {currencyPairs.map((pair, index) => <CurrencyPair key={index} {...pair} />)}
      </div>
    );
    // In general, using key={index} is a bad practice but we can use it for now
  }
}

const mapStateToProps = (state: State) => ({
  currencyPairs: selectCurrencyPairs(state),
});

const dispatchActions = {
  updatePairs,
};

export default connect(mapStateToProps, dispatchActions)(Home);
