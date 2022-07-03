import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { movie } from '../jest/mockObjects';
import MovieTile from '../src/components/organisms/movieTile';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const tree = renderer.create(<MovieTile
    movie={movie}
    index={1}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
