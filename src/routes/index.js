import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Show from '../pages/Show';

const RouteStack = createStackNavigator();

const Routes = () => (
  <RouteStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <RouteStack.Screen name="Home" component={Home} />
    <RouteStack.Screen name="Show" component={Show} />
  </RouteStack.Navigator>
);

export default Routes;
