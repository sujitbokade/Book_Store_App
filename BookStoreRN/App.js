import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigation from './src/navigations/AppNavigation';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';

const App = () => {
  const linking = {
    prefixes: ['bookstorern://app', 'https://reactnative.dev/'],
    config: {
      screens: {
        Home: 'homescreen',
        ShoppingCart: 'cartscreen',
        OrderPlaced: 'orderscreen',
      },
    },
  };
  return (
    <Provider store={Store}>
      <NavigationContainer linking={linking}>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
