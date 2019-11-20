import React from 'react';
import { shallow } from 'enzyme';
import NavbarComponent from '../components/layouts/NavbarComponent';

describe('Navbar Component tests', () => {
  it('It should render Navbar Component', () => {
    const wrapper = shallow(<NavbarComponent />);
    expect(wrapper.find('div').length).toBe(1);
  });
});
