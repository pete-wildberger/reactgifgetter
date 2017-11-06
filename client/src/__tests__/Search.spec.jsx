import React from 'react';
import ReactTestUtils from 'react-dom';
import { shallow } from 'enzyme';
import Search from '../components/Search.jsx';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

// test('Search renders correctly', () => {
//   const component = shallow(<Search />);
//   expect(component).toMatchSnapshot();
// });
