import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Cart } from '../screens/Cart';
import { Payment } from '../screens/Payment';

export type RootStackParams = {
    Cart: undefined,
    Payment: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const CartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" options={{ title: "Cart" }} component={Cart} />
            <Stack.Screen name="Payment" options={{ title: "Payment" }} component={Payment} />
        </Stack.Navigator>
    );
}
