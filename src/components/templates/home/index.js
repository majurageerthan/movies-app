import React from 'react';
import {
  Text, View, TextInput, Image,
} from 'react-native';
import styles from './styles';

import Title from '../../atoms/title';

const HomeTemplate = ({ title, movies }) => (
  <View>
    <Title
      titleText={title}
    />
    <View style={styles.wrapper}>
      <View>
        <View style={{ flexDirection: 'row', flex: 1 }}>

          <View style={{ flex: 1 }}>
            <Image source={{ uri: movies.poster_path }} style={{ height: 100, width: 100 }} />
          </View>

          <View style={{ flex: 2 }}>
            <Text>Hey</Text>
          </View>

        </View>

        <View style={{
          flexDirection: 'row',
          flex: 1,
          padding: 20,
        }}
        >
          <View style={{ flex: 1, backgroundColor: 'red' }} />
          <View style={{ flex: 3, backgroundColor: 'green' }} />
        </View>

      </View>

      {/* <View style={styles.container2}>
        <Text>Hey</Text>
        <Image source={{ uri: 'https://source.unsplash.com/random' }} style={{ height: 50, width: 50 }} />
      </View> */}

    </View>
  </View>
);

export default HomeTemplate;
