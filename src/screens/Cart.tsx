import React, { useContext, useEffect, useState } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, theme } from '../theme';
import { FoodCard } from '../components/FoodCard';
import { CartContext } from '../context/cart/CartContext';
import { roundOut } from '../helpers';
const emptyCart = require('../assets/empty-cart.png')

interface Props extends DrawerScreenProps<any, any> { };

export interface State {
    item_total: number;
    delivery_charge: number;
    tax: number;
    total: number;
}

export const Cart = ({ navigation }: Props) => {

    const { cart } = useContext(CartContext)
    const { container, bold, _2xl, _3xl, lg, xl, base } = theme;

    const [billing, setBilling] = useState<State>({
        item_total: 0,
        delivery_charge: 0,
        tax: 0,
        total: 0
    })

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.toggleDrawer()}>
                    <Icon name="menu" style={[bold, _3xl]} color="#000000" />
                </TouchableOpacity>
            )
        })

        if (cart.length > 0) {
            calculatePrices()
        }
    }, [cart])

    const calculatePrices = () => {
        let item_total = roundOut(cart.map(item => item.price).reduce((prev, curr) => prev + curr, 0))
        let delivery_charge = 1.25
        let tax = roundOut((item_total + delivery_charge) * 0.18)
        let total = roundOut(item_total + delivery_charge + tax)

        setBilling({
            item_total, delivery_charge, tax, total
        })
    }

    return (
        <View style={container}>
            <Text style={[bold, _2xl]}>Cart</Text>
            {
                (cart.length < 1)
                    ? (
                        <View style={styles.empty}>
                            <Image source={emptyCart} />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={[{ marginTop: 20, marginBottom: 5 }, bold, xl]}>Your Cart is Empty</Text>
                                <Text style={[{ color: colors.mediumGray }, base]}>Looks like you haven't added</Text>
                                <Text style={[{ color: colors.mediumGray }, base]}>anything to your cart yet</Text>
                            </View>
                        </View>
                    )
                    : (
                        <ScrollView style={styles.cartScroll}>
                            {
                                cart.map((food, i) => (
                                    <FoodCard key={i} food={food} type='rectangle' />
                                ))
                            }
                        </ScrollView>
                    )
            }
            <View style={styles.summaryContainer}>
                <View style={styles.summary}>
                    <Text style={{ color: colors.mediumGray }}>Item Total</Text>
                    <Text style={[bold, lg]}>${billing.item_total}</Text>
                </View>
                <View style={styles.summary}>
                    <Text style={{ color: colors.mediumGray }}>Delivery Charge</Text>
                    <Text style={[bold, lg]}>${billing.delivery_charge}</Text>
                </View>
                <View style={styles.summary}>
                    <Text style={{ color: colors.mediumGray }}>Tax</Text>
                    <Text style={[bold, lg]}>${billing.tax}</Text>
                </View>
                <View style={styles.summary}>
                    <Text style={{ color: colors.mediumGray }}>Total</Text>
                    <Text style={[bold, lg]}>${billing.total}</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Payment', { cart, billing })}>
                    <View>
                        <Text style={[{ textAlign: 'center' }, bold]}>Confirm Order</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartScroll: {
        marginVertical: 20
    },
    summaryContainer: {
        borderTopWidth: 1,
        paddingTop: 20,
        borderTopColor: colors.mediumGray
    },
    summary: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        marginTop: 20,
        backgroundColor: colors.boldYellow,
        width: 150,
        paddingVertical: 10,
        borderRadius: 15
    },
    empty: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
