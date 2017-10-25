import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import GifCard from '../GifCard';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
