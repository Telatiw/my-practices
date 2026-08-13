import { create } from 'zustand'
import {v4 as uuidv4} from 'uuid'
interface IProductStore {
    isShowToast: boolean
    isSideBar: boolean
    userBasket: {
        id: string;
        productId: number;
        brand: string;
        title: string;
        price: number;
        count: number;
    }[]
    setUserBasket: (newProduct: {
        id: string;
        productId: number;
        brand: string;
        title: string;
        price: number;
        count: number;
    }) => void
    setIsSideBar: () => void
    setIsShowToast: () => void
}
const useProductStore = create<IProductStore>((set) => ({
    isShowToast: false,
    isSideBar: false,
    userBasket: [
        { id: uuidv4(), productId: 6, brand: 'sumsung', title: 's23', price: 39_000_000, count: 3 },
        { id: uuidv4(), productId: 5, brand: 'ausus', title: 'victory', price: 55_000_000, count: 20 },
    ],
    setIsSideBar: () => set((state) => ({ isSideBar: !state.isSideBar })),
    setUserBasket: (newProduct) => set((state) => ({ userBasket: [...state.userBasket, newProduct] })),
    setIsShowToast: () => set((state) => ({ isShowToast: !state.isShowToast }))
}))

export { useProductStore }