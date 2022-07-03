import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/components/pages/home';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="Top Rated Movies"
          component={HomePage}
          options={{
            title: 'Top Rated Movies',
            headerStyle: {
              backgroundColor: '#032541',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
