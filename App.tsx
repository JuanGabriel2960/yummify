import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppDrawer } from './src/navigator/AppDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  )
}

export default App;
