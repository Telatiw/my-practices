import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
interface IUserProductStore {
    products: {
        id: string;
        count: number;
        productId: number;
        img: string;
        title: string;
        price: string;
        brand: string;
    }[]
}
const useProductsStore = create<IUserProductStore>((set) => ({
    products: [
        { id: uuidv4(), count: 42, productId: 1, img: '/Products/Item1.jpg', title: 'Vitcum', price: '43,000', brand: 'hp' },
        { id: uuidv4(), count: 16, productId: 2, img: '/Products/Item2.jpg', title: 'npm', price: '93,000', brand: 'del' },
        { id: uuidv4(), count: 22, productId: 3, img: '/Products/Item3.jpg', title: 'slim', price: '123,000', brand: 'lenovo' },
        { id: uuidv4(), count: 19, productId: 4, img: '/Products/Item4.jpg', title: 'macBook', price: '73,000', brand: 'ausus' },
        { id: uuidv4(), count: 92, productId: 5, img: '/Products/Item5.jpg', title: 'colid', price: '150,000', brand: 'acer' },
        { id: uuidv4(), count: 52, productId: 6, img: '/Products/Item6.jpg', title: 'noudlc', price: '173,000', brand: 'mac' },
    ]
}))

export { useProductsStore,type IUserProductStore }