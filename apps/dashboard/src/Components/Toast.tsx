import { MdOutlineClose } from "react-icons/md";
import { useProductStore as useProduct } from "../Store/ProductsStore.tsx";
const Toast = () => {
  const { setIsShowToast } = useProduct()
  return (
    <div className="fixed bottom-4 z-40 right-4 w-1/4 p-2  bg-blue-500">
      <div className="flex items-center justify-between">
        <span className="text-2xl">Added</span>
        <MdOutlineClose onClick={() => setIsShowToast()} className="cursor-pointer" size={30} />
      </div>
    </div>
  )
}

export default Toast