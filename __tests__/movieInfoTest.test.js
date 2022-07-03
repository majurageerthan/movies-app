import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfoText from '../src/components/molecules/movieInfoText';
import { movie } from '../jest/mockObjects';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const tree = renderer.create(<MovieInfoText
    movie={movie}
    index={1}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
