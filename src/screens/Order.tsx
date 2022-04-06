import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Food } from '../interfaces';
import { theme, colors } from '../theme';
const shopIcon = require('../assets/shop-icon.png')

interface Props extends StackScreenProps<any, any> { }

export const Order = ({ route }: Props) => {

  const { container, bold, _2xl, _3xl, xs, xl } = theme;
  const params = route.params as Food;

  return (
    <View style={container}>
      <View style={styles.text}>
        <Text style={[bold, _3xl]}>{params.name}</Text>
        <Text style={{ color: colors.mediumGray }}>{params.description}</Text>
        <Text style={[xs, { color: colors.mediumGray }]}>{params.calories} Calories</Text>
      </View>
      <Image style={styles.image} source={{ uri: params.image }} />
      <View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={[_2xl, bold,]}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={[_2xl, bold]}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={[_2xl, bold]}>L</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.priceContainer}>
          <View>
            <Text style={[xs, { color: colors.mediumGray }]}>Price</Text>
            <Text style={[_2xl, bold]}>${params.price}</Text>
          </View>
          <TouchableOpacity style={{backgroundColor: colors.boldYellow, borderRadius: 100, padding: 18}}>
            <Image source={shopIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 320,
    height: 320,
    alignSelf: 'center'
  },
  btn: {
    backgroundColor: colors.boldYellow,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 23,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 40
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})
