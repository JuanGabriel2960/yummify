import { navigationOptionsType } from "../interfaces";

const homeIcon = require("../assets/home-icon.png");
const cartIcon = require("../assets/cart-icon.png");
const receiptIcon = require("../assets/receipt-icon.png");
const profileIcon = require("../assets/profile-icon.png");

export const navigationOptions: navigationOptionsType[] = [
    {
        icon: homeIcon,
        text: 'Home',
        navigate: 'StackNavigator'
    },
    {
        icon: cartIcon,
        text: 'Shopping Cart',
        navigate: 'StackNavigator'
    },
    {
        icon: receiptIcon,
        text: 'Receipts',
        navigate: 'StackNavigator'
    },
    {
        icon: profileIcon,
        text: 'Profile',
        navigate: 'StackNavigator'
    }
]

export const options: string[] = ['Pizza', 'Burgers', 'Extras', 'All', 'Favorites']