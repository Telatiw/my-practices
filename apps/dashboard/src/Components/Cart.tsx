import { BsBag } from "react-icons/bs"
import { MdOutlineClose } from "react-icons/md"
import ProductSection from "./ProductSection.tsx"
import { useProductStore as useProduct } from "../Store/ProductsStore.tsx"
const Cart = () => {
    const {isSideBar,setIsSideBar,userBasket} = useProduct()
    return (
        <div className={`w-full pt-18 p-2 h-screen overflow-y-scroll ${isSideBar ? 'translate-x-0' : '-translate-x-full'} bg-sefid `}>
            <div className="flex justify-between w-full">
                <div className="flex gap-2 text-2xl items-center">
                    <BsBag />
                    <span>Bag</span>
                </div>
                <MdOutlineClose onClick={setIsSideBar} className="cursor-pointer" size={30} />
            </div>
            <div>
                {userBasket.map(pro => (
                    <ProductSection {...pro} />
                ))}
            </div>
        </div>
    )
}

export default Cart