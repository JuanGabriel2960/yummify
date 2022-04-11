import React, { useContext, useEffect, useState } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, theme } from '../theme';
import { FoodCard } from '../components/FoodCard';
import { CartContext } from '../context/cart/CartContext';
import { roundOut } from '../helpers';

interface Props extends DrawerScreenProps<any, any> { };

export const Cart = ({ navigation }: Props) => {

    const { cart } = useContext(CartContext)
    const { container, bold, _2xl, _3xl, lg } = theme;

    const [billing, setBilling] = useState({
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

        calculatePrices()
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
            <ScrollView style={styles.cartScroll}>
                {
                    cart.map((food, i) => (
                        <FoodCard key={i} food={food} type='rectangle' />
                    ))
                }
            </ScrollView>
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
                <TouchableOpacity style={styles.btn}>
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
    }
})
