import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppDrawer } from './src/navigator/AppDrawer';
import { AuthProvider } from './src/context/auth/AuthContext';
import { MenuProvider } from './src/context/menu/MenuContext';
import { CartProvider } from './src/context/cart/CartContext';

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      <MenuProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </MenuProvider>
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
