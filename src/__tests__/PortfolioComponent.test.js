import React from 'react';
import { shallow } from 'enzyme';
import PortfolioComponent from '../components/presentational/PortfolioComponent';

describe('HomepageComponent', () => {
  it('It should render Homepage Component', () => {
    const wrapper = shallow(<PortfolioComponent />);
    expect(wrapper.find('div').length).toBe(2);
  });
});
