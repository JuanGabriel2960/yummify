import { ImageSourcePropType } from "react-native";

export interface navigationOptionsType {
    text: string;
    icon: string;
    navigate: string;
}

export interface MethodsType {
    icon: ImageSourcePropType;
    text: validPaymentMethods;
}

export interface RenewResp {
    authenticated: Customer;
    token: string;
}

export interface Customer {
    id: number;
    name: string;
    email: string;
    status: boolean;
    google: boolean;
}

export interface Food {
    id: number;
    name: string;
    description: string;
    price: number;
    calories: number;
    image: string;
    type: valid_type;
}

export enum valid_type {
    Burger = "burger",
    Pizza = "pizza",
    Extra = "extra",
}

export interface FoodInCart extends Food {
    size: valid_size
}

export enum valid_size {
    S = "S",
    M = "M",
    L = "L",
}

export enum validPaymentMethods {
    Cash = "Cash",
    Card = "Card",
    Paypal = "Paypal",
}