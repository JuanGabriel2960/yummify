import React, { createContext, useEffect, useReducer } from "react";
import { Customer, RenewResp } from "../../interfaces";
import { authReducer, AuthState } from './AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../../api/http';

type AuthContextProps = {
    customer: Customer | null;
    status: 'checking' | 'authenticated' | 'unauthenticated';
    removeCustomer: () => void;
    validateJWT: () => Promise<void>;
}

const authInitialState: AuthState = {
    customer: null,
    status: 'checking',
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState)

    useEffect(() => {
        validateJWT();
    }, [])

    const validateJWT = async () => {
        const token = await AsyncStorage.getItem('Authorization')
        if (!token) return dispatch({ type: 'removeCustomer' })

        try {
            const resp = await http.get<RenewResp>('/api/auth/renew', {
                headers: {
                    Authorization: token
                }
            })

            dispatch({
                type: 'setCustomer',
                payload: {
                    customer: resp.data.authenticated
                }
            })
        } catch (error) {
            dispatch({ type: 'removeCustomer' })
        }
    }

    const removeCustomer = async () => {
        await AsyncStorage.removeItem('Authorization')
        dispatch({ type: 'removeCustomer' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            removeCustomer,
            validateJWT
        }}>
            {children}
        </AuthContext.Provider>
    )
}