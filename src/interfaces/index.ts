export interface navigationOptionsType {
    text: string;
    icon: string;
    navigate: string;
}

export interface Food {
    calories: number;
    image: string;
    name: string;
    description: string;
    price: number;
}

export interface Customer {
    id: number;
    name: string;
    email: string;
    status: boolean;
    google: boolean;
}