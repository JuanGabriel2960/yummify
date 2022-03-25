import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { theme } from '../theme';
import { OptionsBar } from '../components/OptionsBar';
import { InformationsCard } from '../components/InformationsCard';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

interface Props extends DrawerScreenProps<any, any> { };

export const Home = ({ navigation }: Props) => {

  const { container, light, bold, _2xl, _3xl } = theme;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.hamburger} onPress={() => navigation.toggleDrawer()}>
          <Text style={[bold, _3xl]}>&equiv;</Text>
        </TouchableOpacity>
      )
    })
  }, [])


  return (
    <View style={container}>
      <View>
        <Text style={[light, _2xl]}>Food</Text>
        <Text style={[bold, _2xl]}>Special For You</Text>
        <OptionsBar />
      </View>

      <Button title="Go to Order" onPress={() => navigation.navigate('Order')} />

      <InformationsCard />
    </View>
  )
}

const styles = StyleSheet.create({
  hamburger: {
    marginLeft: 15
  }
})
