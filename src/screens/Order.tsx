import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { sizes } from '../data';
import { Food } from '../interfaces';
import { theme, colors } from '../theme';
import { CartContext } from '../context/cart/CartContext';
import { valid_size } from '../interfaces/index';
import { calculatePriceBySize, roundOut } from '../helpers';
const shopIcon = require('../assets/shop-icon.png')

interface Props extends StackScreenProps<any, any> { }

export const Order = ({ route }: Props) => {

  const { addToCart } = useContext(CartContext)

  const { container, bold, _2xl, _3xl, xs, xl } = theme;
  const params = route.params as Food;

  const [sizeFood, setSizeFood] = useState<valid_size>(valid_size.S)

  const added = () => {
    addToCart({ ...params, price: roundOut(calculatePriceBySize(params.price, sizeFood)), size: sizeFood })
    Alert.alert('Added', 'Item added to cart successfully.')
  }

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
          {
            sizes.map(size => (
              <TouchableOpacity key={size} style={[styles.btn, sizeFood === size && styles.check]} onPress={() => setSizeFood(size)}>
                <Text style={[_2xl, bold,]}>{size}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <View style={styles.priceContainer}>
          <View>
            <Text style={[xs, { color: colors.mediumGray }]}>Price</Text>
            <Text style={[_2xl, bold]}>${roundOut(calculatePriceBySize(params.price, sizeFood))}</Text>
          </View>
          <TouchableOpacity onPress={added} style={{ backgroundColor: colors.boldYellow, borderRadius: 100, padding: 18 }}>
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
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 23,
  },
  check: {
    backgroundColor: colors.boldYellow
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
