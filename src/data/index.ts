import { navigationOptionsType } from "../interfaces";

export const navigationOptions: navigationOptionsType[] = [
    {
        icon: 'home-sharp',
        text: 'Home',
        navigate: 'StackNavigator'
    },
    {
        icon: 'cart-sharp',
        text: 'Shopping Cart',
        navigate: 'StackNavigator'
    },
    {
        icon: 'receipt-sharp',
        text: 'Receipts',
        navigate: 'StackNavigator'
    },
    {
        icon: 'person-sharp',
        text: 'Profile',
        navigate: 'StackNavigator'
    }
]

export const options: string[] = ['Pizza', 'Burgers', 'Extras', 'All', 'Favorites']