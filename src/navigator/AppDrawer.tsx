import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './HomeStack';

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={HomeStack} />
        </Drawer.Navigator>
    );
}