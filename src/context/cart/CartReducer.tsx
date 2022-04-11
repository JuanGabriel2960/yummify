import { FoodInCart } from "../../interfaces";

export interface CartState {
    cart: FoodInCart[];
}

type CartAction =
    | { type: 'addToCart', payload: { food: FoodInCart } }
    | { type: 'removeCustomer' }

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'addToCart':
            return {
                ...state,
                cart: [...state.cart, action.payload.food],
            }

        default:
            return state;
    }
}