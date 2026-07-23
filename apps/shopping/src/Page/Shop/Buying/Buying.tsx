import type { InfoProduct } from '../Shop'
function Buying({ id, img, price, title, onRemove }: InfoProduct) {
    const removeHandler = (id: number) => {
        onRemove?.(id)
    }
    return (
        <div className='w-full  justify-between items-center font-semibold flex *:p-2 '>
            <div className='w-1/3 flex items-center'>
                <div className='w-8 h-8'>
                    <img className='w-full h-full' src={img} alt="" />
                </div>
                <span className=''>{title}</span>
            </div>
            <span className='grow'>{price}</span>
            <span className='grow' ><button onClick={() => removeHandler(id)} className='bg-rose-500 p-1 text-white rounded-lg cursor-pointer'>Remove</button></span>
        </div>
    )
}

export default Buying