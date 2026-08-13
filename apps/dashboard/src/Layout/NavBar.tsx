import { BsBag } from "react-icons/bs";
import { useProductStore as useProduct } from "../Store/ProductsStore.tsx";
const NavBar = () => {
    const navList = ['home','services','about us','contact','product']
    const {setIsSideBar} = useProduct()
    return (
        <div className="flex z-10 w-full px-5 py-4 justify-between bg-black">
            <div className="flex w-1/2 items-center gap-5">
                <a  className="text-third text-3xl font-bold" href="#">T CODE</a>
                <ul className="flex justify-between grow">
                    {navList.map((nav,index) => (
                        <li className="capitalize font-medium text-mainSecondary" key={index}>{nav}</li>
                    ))}
                </ul>   
            </div>
            <div className="flex items-center gap-4">
                <BsBag color="red" className="cursor-pointer" size={20} onClick={setIsSideBar} />
                <span className="bg-mainSecondary rounded-full w-6 centering text-third aspect-square">0</span>
            </div>
        </div>
    )
}

export default NavBar