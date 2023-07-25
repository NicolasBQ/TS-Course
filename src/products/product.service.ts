import { Product } from "./product.model";

export const products: Product[] = [];

    
export const addProduct = (data: Product) => {
    products.push(data);
}

export const calcStock = (): number => {
    let initVal = 0;
    return products.reduce((accum, currentVal) => accum + currentVal.stock, initVal);
}