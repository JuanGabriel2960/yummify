import { FoodInCart, validPaymentMethods } from "../../interfaces";

export interface CartState {
    cart: FoodInCart[];
    paymentMethods: validPaymentMethods;
}

type CartAction =
    | { type: 'addToCart', payload: { food: FoodInCart } }
    | { type: 'changePaymentMethods', payload: { method: validPaymentMethods } }

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'addToCart':
            return {
                ...state,
                cart: [...state.cart, action.payload.food],
            }

        case 'changePaymentMethods':
            return {
                ...state,
                paymentMethods: action.payload.method,
            }

        default:
            return state;
    }
}