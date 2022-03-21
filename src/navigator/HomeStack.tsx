import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Order } from '../screens/Order';

export type RootStackParams = {
    Home: undefined,
    Order: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ title: "Home" }} component={Home} />
            <Stack.Screen name="Order" options={{ title: "Order" }} component={Order} />
        </Stack.Navigator>
    );
}