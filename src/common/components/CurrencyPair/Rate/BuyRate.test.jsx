// @flow
import React from 'react';
import { shallow } from 'enzyme';
import BuyRate from './BuyRate';

describe('BuyRate', () => {
  const RATE = 12.345;
  const CURRENCY = 'USD';

  test('should match snapshot', () => {
    const props = {
      rate: RATE,
      currency: CURRENCY,
    };
    const component = shallow(<BuyRate {...props} />);
    expect(component).toMatchSnapshot();
  });
});
