// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Rate from './Rate';

describe('Rate', () => {
  const RATE = 12.345;
  const HEADER = 'USD';

  test('should match snapshot', () => {
    const props = {
      rate: RATE,
      header: HEADER,
    };
    const component = shallow(<Rate {...props} />);
    expect(component).toMatchSnapshot();
  });
});
