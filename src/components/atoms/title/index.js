import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Title = ({ titleText }) => (
  <Text style={styles.titleText}>
    {titleText}
    {'\n'}
    {'\n'}
  </Text>
);

export default Title;
