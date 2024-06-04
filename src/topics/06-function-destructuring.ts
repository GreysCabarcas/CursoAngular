export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 25000
}

const tablet: Product = {
    description: 'iPad Air',
    price: 23000
}


interface taxCalculationOptions{
    tax: number;
    product: Product[];
}

// function taxCalculation(option: taxCalculationOptions): number[]{
// function taxCalculation({tax, product}: taxCalculationOptions): [number, number]{
export function taxCalculation( options: taxCalculationOptions ): [number, number]{
    const { tax, product } = options;
    let total = 0;
   
    product.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax]
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxtTotal] = taxCalculation({
    tax: tax,
    product: shoppingCart
})

console.log('Total', total)
console.log('Tax', taxtTotal)
