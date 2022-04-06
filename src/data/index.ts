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

export const options: string[] = ['Pizza', 'Burgers', 'Extras', 'All', 'Favorites']