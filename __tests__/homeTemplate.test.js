import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { movie, movies } from '../jest/mockObjects';
import HomeTemplate from '../src/components/templates/home';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const tree = renderer.create(
    <HomeTemplate
      movies={movies}
      increasePageNo={() => {}}
      onPullToRefresh={() => {}}
      isPullToRefreshing={false}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
