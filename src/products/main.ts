import { addProduct, calcStock, products } from "./product.service";

addProduct({
    title: 'Pro1',
    createdAt: new Date(),
    stock: 2,
})
addProduct({
    title: 'Pro2',
    createdAt: new Date(),
    stock: 2,
    size: 'XL'
})

console.log(products);
const totalStock = calcStock();
console.log(totalStock);