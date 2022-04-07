export interface navigationOptionsType {
    text: string;
    icon: string;
    navigate: string;
}

export interface RenewResp {
    authenticated: Customer;
    token:         string;
}

export interface Customer {
    id: number;
    name: string;
    email: string;
    status: boolean;
    google: boolean;
}

export interface MenuResp {
    count: number;
    next: number;
    previous: number;
    menu: Food[];
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