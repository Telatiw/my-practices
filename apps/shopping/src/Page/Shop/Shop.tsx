import { Component } from 'react'
import Product from './Product/Product'
import Buying from './Buying/Buying'
export interface InfoProduct {
    id: number
    title: string
    price: number
    img: string
    onBuy?: Function
    onRemove?:Function
}
interface ShopState {
    products: InfoProduct[],
    shoppingCart: InfoProduct[]

}

class Shop extends Component<{}, ShopState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            products: [
                { id: 1, title: 'CellPhone', img: 'cell phone.webp', price: 53_000 },
                { id: 2, title: 'cloths', img: 'T-shirt.webp', price: 15_000 },
                { id: 3, title: 'guitar', img: 'guitar.webp', price: 25_000 },
                { id: 4, title: 'Laptop', img: 'laptop.webp', price: 40_000 },
            ],
            shoppingCart: [
            ]
        }
    }
    buyItem(productid: number) {
        let newProd = this.state.products.filter(pro => pro.id === productid)
        this.setState({ shoppingCart: [...this.state.shoppingCart, ...newProd] })
    }
    removeAllProductHandler(){
        this.setState({shoppingCart:[]})
        console.log('sallam')
    }
    remvoeItem(id:number){
        let theRemoveItem = this.state.shoppingCart.filter(item => item.id !== id)
        this.setState({shoppingCart:[...theRemoveItem]})
    }
    render() {
        return (
            <div className='w-full flex flex-col items-center gap-4'>
                <div className='w-1/2 h-auto gap-5 grid grid-cols-2 grid-rows-2'>
                    {this.state.products.map(product => (
                        <Product key={product.id} onBuy={() => this.buyItem(product.id)} {...product} />
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
                        {this.state.shoppingCart.map(item => (
                            <Buying key={item.id} onRemove={() => this.remvoeItem(item.id)} {...item} />
                        ))}
                    </div>
                </div>
                <button onClick={this.removeAllProductHandler.bind(this)} className='px-4 py-2 bg-slate-700 rounded-lg font-semibold text-white cursor-pointer uppercase'>empty basket</button>
            </div>
        )
    }
}
export default Shop