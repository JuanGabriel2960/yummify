import { valid_size } from "../interfaces"

export const roundOut = (number: number) => {
    return Math.round(number * 100) / 100
}

export const calculatePriceBySize = (price: number, sizeFood: valid_size) => {
    switch (sizeFood) {
        case 'S':
            return price * 1
        case 'M':
            return price * 1.2
        case 'L':
            return price * 1.5
        default:
            return price;
    }
}