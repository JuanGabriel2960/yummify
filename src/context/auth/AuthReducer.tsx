import { Customer } from "../../interfaces";

export interface AuthState {
    customer: Customer | null;
}

type AuthAction =
    | { type: 'setCustomer', payload: { customer: Customer } }
    | { type: 'removeCustomer' }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'setCustomer':
            return {
                ...state,
                customer: action.payload.customer
            }

        case 'removeCustomer':
            return {
                ...state,
                customer: null
            }

        default:
            return state;
    }
}