
import { Product, taxCalculation} from "./06-function-destructuring"; // Ctrl + space para mostrar que trae Product 

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 400

    },
    {
        description: 'iPhad',
        price: 500
    }
];


const [ total, tax ] = taxCalculation({
    tax: 0.15,
    product: shoppingCart
});

console.log('Total:', total);
console.log('Tax:', tax);

export{};