import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
// import HomeScreen from './src/screens/HomeScreen';
import userHome from './src/screens/userHome';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="userHome">
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="userHome" component={userHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
