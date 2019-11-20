import React from 'react';
import { shallow } from 'enzyme';
import ContactsComponent from '../components/presentational/ContactsComponent';

describe('HomepageComponent', () => {
  it('It should render Homepage Component', () => {
    const wrapper = shallow(<ContactsComponent />);
    expect(wrapper.find('div').length).toBe(2);
  });
});
