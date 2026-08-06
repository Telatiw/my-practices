import Products from "./Products/Products"
import { useProductsStore } from "../../Stores/ProductsStore"
const AllProducts = () => {
  const products = useProductsStore(state => state.products)
  return (
    <div className=" flex-1 grid grid-cols-3 p-4 gap-5 shadow-lg  ">
      {products.map(product => (
        <Products key={product.id} {...product} />
      ))}
    </div>
  )
}

export default AllProducts