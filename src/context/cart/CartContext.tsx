import React, { createContext, useReducer } from "react";
import { FoodInCart } from "../../interfaces";
import { cartReducer, CartState } from './CartReducer';

type CartContextProps = {
    cart: FoodInCart[];
    addToCart: (food: FoodInCart) => void;
}

const cartInitialState: CartState = {
    cart: [],
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (food: FoodInCart) => {
        dispatch({
            type: 'addToCart',
            payload: {
                food: food
            }
        });
    };

    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}