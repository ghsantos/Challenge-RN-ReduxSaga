/**
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import configureStore from './src/store/configureStore';
import Detail from './src/scenes/Detail';
import Home from './src/scenes/Home';
import List from './src/scenes/List';

const AppNavigator = createStackNavigator({
  Home,
  List,
  Detail,
});

const store = configureStore();

const AppContaier = createAppContainer(AppNavigator);

const App = () => (
  <Provider store={store}>
    <AppContaier />
  </Provider>
);

export default App;
