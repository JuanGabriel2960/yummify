import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppDrawer } from './src/navigator/AppDrawer';
import { AuthProvider } from './src/context/auth/AuthContext';
import { CartProvider } from './src/context/cart/CartContext';

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </AuthProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <AppDrawer />
      </AppState>
    </NavigationContainer>
  )
}

export default App;
