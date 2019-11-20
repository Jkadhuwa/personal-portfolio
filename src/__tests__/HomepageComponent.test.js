import React from 'react';
import { shallow } from 'enzyme';
import HomepageComponent from '../components/presentational/HomepageComponent';

describe('HomepageComponent', () => {
  it('It should render Homepage Component', () => {
    const wrapper = shallow(<HomepageComponent />);
    expect(wrapper.find('div').length).toBe(3);
  });
});
