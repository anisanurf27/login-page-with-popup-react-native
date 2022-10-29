import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import Popup from './screens/Popup';

const Stack = createStackNavigator();

const Navigation = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Success" component={Popup} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;