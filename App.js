/**
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Detail from './src/scenes/Detail';
import Home from './src/scenes/Home';
import List from './src/scenes/List';

const AppNavigator = createStackNavigator({
  Home,
  List,
  Detail,
});

//AppNavigator.navigationOptions = { header: null };

export default createAppContainer(AppNavigator);
