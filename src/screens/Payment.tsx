import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Text, View, StyleSheet, Image, TextInput, Keyboard, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ReceiptCard } from '../components/ReceiptCard';
import { colors, theme } from '../theme'
import { State as CartState } from './Cart'
import { CartContext } from '../context/cart/CartContext';
import { methods } from '../data';
import http from '../api/http';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FoodInCart } from '../interfaces';

interface Props extends StackScreenProps<any, any> { }

interface Params {
    cart: FoodInCart;
    billing: CartState;
}

export const Payment = ({ route, navigation }: Props) => {

    const { cart, billing } = route.params as Params;
    const { paymentMethods, changePaymentMethod } = useContext(CartContext)
    const { container, bold, _2xl, lg, base, row } = theme;

    let date = new Date().toLocaleDateString()

    const formData = {
        total: billing.total,
        date,
        customerId: '',
        cart,
        paymentMethods
    }

    const submit = async () => {
        Keyboard.dismiss()

        try {
            const resp = await http.post<{ token: string }>('/api/order', formData)
            await AsyncStorage.setItem('Authorization', resp.data.token)
            // validateJWT()
        } catch (error: any) {
            Alert.alert('Error', error.response.data.msg || 'An error ocurred. Please try again later.')
        }
    }

    return (
        <View style={container}>
            <View>
                <Text style={[bold, _2xl]}>Confirm order and pay</Text>
                <Text style={[{ color: colors.mediumGray }, base]}>Please make the payment, after that you can enjoy the food</Text>
            </View>
            <View style={{ marginTop: 15 }}>
                <Text style={[bold, lg, { marginBottom: 10 }]}>PAYMENT METHODS</Text>
                <View style={[row, { justifyContent: 'space-between' }]}>
                    {
                        methods.map(({ icon, text }) => (
                            <TouchableOpacity key={text} style={[styles.btnMethodContainer, paymentMethods === text && styles.check]} onPress={() => changePaymentMethod(text)}>
                                <Image source={icon} style={{ marginRight: 10 }} />
                                <Text style={lg}>{text}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
            <View style={{ marginVertical: 15 }}>
                <Text style={[bold, lg, { marginBottom: 10 }]}>PAYMENT DETAILS</Text>
                <View>
                    {
                        (paymentMethods === 'Cash')
                            ? (
                                <>
                                    <TextInput style={styles.input} placeholder="Name" placeholderTextColor={colors.mediumGray} autoCapitalize='words' autoCorrect={false} />
                                    <TextInput style={[styles.input, { marginVertical: 15 }]} placeholder="Phone" placeholderTextColor={colors.mediumGray} keyboardType='phone-pad' autoCapitalize='none' autoCorrect={false} />
                                </>
                            )
                            : (paymentMethods === 'Card')
                                ? (
                                    <>
                                        <TextInput style={styles.input} placeholder="Card Number" placeholderTextColor={colors.mediumGray} keyboardType='numeric' autoCapitalize='words' autoCorrect={false} />
                                        <TextInput style={[styles.input, { marginVertical: 15 }]} placeholder="CVV" placeholderTextColor={colors.mediumGray} keyboardType='numeric' autoCapitalize='words' autoCorrect={false} />
                                    </>
                                )
                                : (
                                    <>
                                        <TextInput style={styles.input} placeholder="Email" placeholderTextColor={colors.mediumGray} keyboardType="email-address" autoCapitalize='none' autoCorrect={false} />
                                        <TextInput style={[styles.input, { marginVertical: 15 }]} placeholder="Password" placeholderTextColor={colors.mediumGray} secureTextEntry={true} autoCapitalize='none' autoCorrect={false} />
                                    </>
                                )
                    }
                    <TextInput style={styles.input} placeholder="Notes" placeholderTextColor={colors.mediumGray} autoCapitalize='sentences' autoCorrect={false} />
                </View>
            </View>
            <ReceiptCard billing={billing} date={date} />
            <View style={[row, { justifyContent: 'space-between' }]}>
                <TouchableOpacity style={styles.btnMethodContainer} onPress={() => navigation.goBack()}>
                    <Text style={[bold, base, { color: colors.mediumGray }]}>Cancel Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={submit} style={[styles.btnMethodContainer, { backgroundColor: colors.boldYellow }]}>
                    <Text style={[bold, base]}>Confirm Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnMethodContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    input: {
        backgroundColor: 'transparent',
        fontSize: 15,
        padding: 0,
        borderBottomWidth: 1,
        borderColor: colors.mediumGray
    },
    check: {
        borderWidth: 1,
        borderColor: colors.mediumBlue,
        backgroundColor: colors.lightBlue
    }
})

