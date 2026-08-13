import { useProductStore as useProduct } from "../Store/ProductsStore.tsx"

interface IProductSectionProp {
    id: string
    productId: number
    brand: string
    title: string
    price: number
    count: number
}
const ProductSection = ({ id, brand, price, productId, title,count }: IProductSectionProp) => {
    const {setIsShowToast,setUserBasket} = useProduct()
    const handleAdd = () => {
        setIsShowToast()
        let newProduct = {id,brand,price,productId,title,count}
        setUserBasket(newProduct)
    }
    return (
        <div className="w-full flex justify-center ">
            <div className="p-2 shadow-2xl bg-sefid bg justify-between w-1/2 items-center flex flex-col">
                <div className="h-1/2"><img className="w-full h-full" src="Item1.webp" alt="" /></div>
                <h4 className="text-center text-2xl font-medium">{ }</h4>
                <span className="text-center text-sefid py-2 px-4 rounded-lg bg-siah">${price}</span>
                <button onClick={handleAdd} className="bg-third rounded-lg text-sefid p-2">Add To Cart</button>
                <button className="border p-2 rounded-lg">More Information</button>
                <span className="text-center bg-siah text-sefid rounded-lg border-2 p-2 ">Number : {count}</span>
            </div>
        </div>
    )
}

export default ProductSection