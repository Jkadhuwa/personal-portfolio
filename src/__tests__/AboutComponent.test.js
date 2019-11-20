import React from 'react';
import { shallow } from 'enzyme';
import AboutComponent from '../components/presentational/AboutComponent';

describe('AboutComponent Tests', () => {
  it('It should render Aboout component', () => {
    const wrapper = shallow(<AboutComponent />);
    expect(wrapper.find('div').length).toBe(9);
    expect(wrapper.find('img').length).toBe(6);
  });
});
