import { useState } from 'react'
import Product from './Product/Product'
import Buying from './Buying/Buying'
export interface InfoProduct {
    id: number
    title: string
    price: number
    img: string
    onBuy?: Function
    onRemove?: Function
}
function Shop() {
    const [products] = useState([
        { id: 1, title: 'CellPhone', img: 'cell phone.webp', price: 53_000 },
        { id: 2, title: 'cloths', img: 'T-shirt.webp', price: 15_000 },
        { id: 3, title: 'guitar', img: 'guitar.webp', price: 25_000 },
        { id: 4, title: 'Laptop', img: 'laptop.webp', price: 40_000 },
    ])
    const [shoppingCart, setShoppingCart] = useState<InfoProduct[]>([])
    const buyItem = (productid: number) => {
        let newProd = products.filter(pro => pro.id === productid)
        console.log(newProd)
        setShoppingCart([...shoppingCart,...newProd])
    }
    const removeAllProductHandler = () => {
        setShoppingCart([])
    }
    const remvoeItem = (id: number) => {
        let theRemoveItem = shoppingCart.filter(item => item.id !== id)
        setShoppingCart([...theRemoveItem])
    }
    return (
        <div className='w-full flex flex-col items-center gap-4'>
            <div className='w-1/2 h-auto gap-5 grid grid-cols-2 grid-rows-2'>
                {products.map(product => (
                    <Product key={product.id} onBuy={() => buyItem(product.id)} {...product} />
                ))}
            </div>
            <div className='w-1/2 h-auto '>
                <h2 className='text-center font-semibold text-4xl'>Cart</h2>
                <div className='w-full p-2 flex justify-between gap-2 *:grow *:p-2 *:font-semibold *:text-center '>
                    <span className='uppercase border-b '>item</span>
                    <span className='uppercase border-b '>price</span>
                    <span className='uppercase border-b '>Doing</span>
                </div>
                <div className='text-center'>
                    {shoppingCart.map(item => (
                        <Buying key={item.id} onRemove={() => remvoeItem(item.id)} {...item} />
                    ))}
                </div>
            </div>
            <button onClick={() => removeAllProductHandler()} className='px-4 py-2 bg-slate-700 rounded-lg font-semibold text-white cursor-pointer uppercase'>empty basket</button>
        </div>
    )
}
export default Shop