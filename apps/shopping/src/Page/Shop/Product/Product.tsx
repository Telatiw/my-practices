import { Component } from 'react'
import type {InfoProduct } from '../Shop.tsx'
class Product extends Component<InfoProduct> {
    constructor(props:InfoProduct){
        super(props)
    }
    clickHandler(productid:number){
        if(this.props.onBuy){
            this.props.onBuy(productid)
        }
    }
    render() {
        return (
            <div className='flex flex-col gap-4 '>
                <h2 className='text-center text-3xl font-semibold'>{this.props.title}</h2>
                <div className='h-3/4 '><img className='w-full h-full  object-center' src={this.props.img} alt={this.props.title} /></div>
                <div className='flex justify-around items-center'>
                    <span className='font-semibold'>{this.props.price}</span>
                    <button onClick={()=>this.clickHandler(this.props.id)} className='navBtn'>Add To Basket</button>
                </div>
            </div>
        )
    }
}

export default Product