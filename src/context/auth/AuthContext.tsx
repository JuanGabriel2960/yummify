import React, { createContext, useReducer } from "react";
import { Customer } from "../../interfaces";
import { authReducer, AuthState } from './AuthReducer';

type AuthContextProps = {
    customer: Customer | null;
    setCustomer: () => void;
    removeCustomer: () => void;
}

const authInitialState: AuthState = {
    customer: null
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState)

    const setCustomer = () => { };
    const removeCustomer = () => { };

    return (
        <AuthContext.Provider value={{
            ...state,
            setCustomer,
            removeCustomer
        }}>
            {children}
        </AuthContext.Provider>
    )
}