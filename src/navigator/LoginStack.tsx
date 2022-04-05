import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

export type RootStackParams = {
    Login: undefined,
    Register: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const LoginStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" options={{ title: "Login" }} component={Login} />
            <Stack.Screen name="Register" options={{ title: "Register" }} component={Register} />
        </Stack.Navigator>
    );
}