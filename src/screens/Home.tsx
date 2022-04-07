import React, { useContext, useEffect } from 'react'
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { theme } from '../theme';
import { OptionsBar } from '../components/OptionsBar';
import { InformationsCard } from '../components/InformationsCard';
import { FoodCard } from '../components/FoodCard';
import { MenuContext } from '../context/menu/MenuContext';
const { width } = Dimensions.get('window')

interface Props extends DrawerScreenProps<any, any> { };

export const Home = ({ navigation }: Props) => {

  const { menu } = useContext(MenuContext)
  const { container, light, bold, _2xl, _3xl } = theme;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.hamburger} onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" style={[bold, _3xl]} color="#000000" />
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

      <View>
        <Carousel data={menu} renderItem={({ item }: any) => <TouchableOpacity onPress={() => navigation.navigate('Order', item)}><FoodCard food={item} /></TouchableOpacity>} sliderWidth={width} itemWidth={260} />
      </View>

      <InformationsCard />
    </View>
  )
}

const styles = StyleSheet.create({
  hamburger: {
    marginLeft: 15,
  }
})
