// @flow
import React from 'react';
import { shallow } from 'enzyme';
import SellRate from './SellRate';

describe('SellRate', () => {
  const RATE = 12.345;
  const CURRENCY = 'USD';

  test('should match snapshot', () => {
    const props = {
      rate: RATE,
      currency: CURRENCY,
    };
    const component = shallow(<SellRate {...props} />);
    expect(component).toMatchSnapshot();
  });
});
