import React from 'react'
import { View, Text, Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any>{};

export const Home = ({ navigation }: Props ) => {
  return (
    <View>
        <Text>Home</Text>
        <Button title="Go to Order" onPress={ () => navigation.navigate('Order') } />
    </View>
  )
}
