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

export interface Food {
    calories: number;
    image: string;
    name: string;
    description: string;
    price: number;
}