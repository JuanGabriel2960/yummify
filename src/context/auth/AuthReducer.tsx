import { Customer } from "../../interfaces";

export interface AuthState {
    customer: Customer | null;
    status: 'checking' | 'authenticated' | 'unauthenticated';
}

type AuthAction =
    | { type: 'setCustomer', payload: { customer: Customer } }
    | { type: 'removeCustomer' }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'setCustomer':
            return {
                ...state,
                customer: action.payload.customer,
                status: 'authenticated'
            }

        case 'removeCustomer':
            return {
                ...state,
                customer: null,
                status: 'unauthenticated'
            }

        default:
            return state;
    }
}