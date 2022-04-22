import { navigationOptionsType, valid_size, MethodsType, validPaymentMethods } from "../interfaces";

export const navigationOptions: navigationOptionsType[] = [
    {
        icon: 'home-sharp',
        text: 'Home',
        navigate: 'HomeStack'
    },
    {
        icon: 'cart-sharp',
        text: 'Shopping Cart',
        navigate: 'CartStack'
    },
    {
        icon: 'receipt-sharp',
        text: 'Receipts',
        navigate: 'HomeStack'
    },
    {
        icon: 'person-sharp',
        text: 'Profile',
        navigate: 'HomeStack'
    }
]

export const options: { text: string, type: string }[] = [
    {
        text: 'Pizza',
        type: 'pizza'
    },
    {
        text: 'Burgers',
        type: 'burger'
    },
    {
        text: 'Extra',
        type: 'extra'
    },
    {
        text: 'All',
        type: ''
    },
    {
        text: 'Favorites',
        type: 'favorite'
    },
]

export const sizes: valid_size[] = [valid_size.S, valid_size.M, valid_size.L]

const cashIcon = require('../assets/cash-icon.png')
const cardIcon = require('../assets/card-icon.png')
const paypalIcon = require('../assets/paypal-icon.png')

export const methods: MethodsType[] = [
    {
        icon: cashIcon,
        text: validPaymentMethods.Cash
    },
    {
        icon: cardIcon,
        text: validPaymentMethods.Card
    },
    {
        icon: paypalIcon,
        text: validPaymentMethods.Paypal
    },
]