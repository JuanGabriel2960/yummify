import React, { createContext, useReducer } from "react";
import { FoodInCart, validPaymentMethods } from "../../interfaces";
import { cartReducer, CartState } from './CartReducer';

type CartContextProps = {
    cart: FoodInCart[];
    paymentMethods: validPaymentMethods;
    addToCart: (food: FoodInCart) => void;
    changePaymentMethod: (method: validPaymentMethods) => void;
}

const cartInitialState: CartState = {
    cart: [],
    paymentMethods: validPaymentMethods.Cash
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

    const changePaymentMethod = (method: validPaymentMethods) => {
        dispatch({
            type: 'changePaymentMethods',
            payload: {
                method
            }
        });
    }

    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            changePaymentMethod
        }}>
            {children}
        </CartContext.Provider>
    )
}