import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomePage';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import UserHome from './src/screens/UserHome'
import LocateScreen from './src/screens/LocateScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" options = {{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="Login" options = {{ headerShown: false }} component={Login} />
        <Stack.Screen name="UserHome" options = {{ headerShown: false }} component={UserHome} />
        <Stack.Screen name="Signup" options = {{ headerShown: false }} component={Signup} />
        <Stack.Screen name="Locate" options = {{ headerShown: false }} component={LocateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
