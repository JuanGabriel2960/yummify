import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, Button, StyleSheet } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { theme } from '../theme';
import { OptionsBar } from '../components/OptionsBar';
import { InformationsCard } from '../components/InformationsCard';

interface Props extends DrawerScreenProps<any, any> { };

export const Home = ({ navigation }: Props) => {

  const { container, light, bold, _2xl } = theme;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title='-' onPress={() => navigation.toggleDrawer()} />
      )
    })
  }, [])


  return (
    <View style={container}>
      <View>
        <Text style={[light, _2xl]}><Icon name="menu" size={30} color="#900" /></Text>
        <Text style={[bold, _2xl]}>Special For You</Text>
        <OptionsBar />
      </View>

      <Button title="Go to Order" onPress={() => navigation.navigate('Order')} />
      
      <InformationsCard />
    </View>
  )
}

const styles = StyleSheet.create({

})
