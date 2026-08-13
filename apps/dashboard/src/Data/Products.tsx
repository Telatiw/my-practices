import { v4 as uuidv4 } from 'uuid';
const shedProducts = {
    laptops: [
        { id: uuidv4(), productId: 1, brand: 'hp', title: 'vBook', price: 75_000_000, count: 4 },
        { id: uuidv4(), productId: 2, brand: 'mac', title: 'macBook', price: 100_000_000, count: 9 },
        { id: uuidv4(), productId: 3, brand: 'lenovo', title: 'slim', price: 115_000_000, count: 13 },
        { id: uuidv4(), productId: 4, brand: 'acer', title: 'vitcum', price: 125_000_000, count: 2 },
        { id: uuidv4(), productId: 5, brand: 'ausus', title: 'victory', price: 55_000_000, count: 20 },
    ],
    cellPhones: [
        { id: uuidv4(), productId: 1, brand: 'xiaomi', title: 'redmi', price: 76_000_000, count: 12 },
        { id: uuidv4(), productId: 2, brand: 'xiaomi', title: 'note', price: 46_000_000, count: 23 },
        { id: uuidv4(), productId: 3, brand: 'xiaomi', title: 'poco', price: 33_000_000, count: 14 },
        { id: uuidv4(), productId: 4, brand: 'iphone', title: 'pro Max', price: 16_000_000, count: 8 },
        { id: uuidv4(), productId: 5, brand: 'sumsung', title: 'a51', price: 50_000_000, count: 6 },
        { id: uuidv4(), productId: 6, brand: 'sumsung', title: 's23', price: 39_000_000, count: 3 },
    ],
}

export {shedProducts}
