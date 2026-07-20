import { Component } from 'react'
import type { InfoProduct } from '../Shop'
class Buying extends Component<InfoProduct> {
    constructor(props: InfoProduct) {
        super(props)
    }
    removeHandler(id:number){
        this.props.onRemove?.(id)
    }
    render() {
        return (
            <div className='w-full  justify-between items-center font-semibold flex *:p-2 '>
                <div className='w-1/3 flex items-center'>
                    <div className='w-8 h-8'>
                        <img className='w-full h-full' src={this.props.img} alt="" />
                    </div>
                    <span className=''>{this.props.title}</span>
                </div>
                <span className='grow'>{this.props.price}</span>
                <span className='grow' ><button onClick={() => this.removeHandler(this.props.id)} className='bg-rose-500 p-1 text-white rounded-lg cursor-pointer'>Remove</button></span>
            </div>
        )
    }
}

export default Buying