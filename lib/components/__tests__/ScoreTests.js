import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Score from '../Score';

describe('Score Component', () => {
  it('displays Score of zero', () => {
    const component = shallow(<Score />);
    expect(component.text()).toEqual('0');
  });
});