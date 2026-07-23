import type {InfoProduct } from '../Shop.tsx'
function Product ({id,img,price,title,onBuy}:InfoProduct) {
   const clickHandler = (productid:number) => {
        if(onBuy){
            onBuy(productid)
        }
    }
        return (
            <div className='flex flex-col gap-4 '>
                <h2 className='text-center text-3xl font-semibold'>{title}</h2>
                <div className='h-3/4 '><img className='w-full h-full  object-center' src={img} alt={title} /></div>
                <div className='flex justify-around items-center'>
                    <span className='font-semibold'>{price}</span>
                    <button onClick={()=>clickHandler(id)} className='navBtn'>Add To Basket</button>
                </div>
            </div>
        )
}

export default Product