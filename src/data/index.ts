import { navigationOptionsType } from "../interfaces";

export const navigationOptions: navigationOptionsType[] = [
    {
        icon: 'home-sharp',
        text: 'Home',
        navigate: 'HomeStack'
    },
    {
        icon: 'cart-sharp',
        text: 'Shopping Cart',
        navigate: 'HomeStack'
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