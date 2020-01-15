import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
//react-test-renderer
test('should render Header correctly',() => {
  //enzyme
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Expensify');

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
