import { useParams } from "react-router"
import { useProductsStore } from "../../../../Stores/ProductsStore"

const Product = () => {
  const {products} = useProductsStore()
  let params = useParams()
  let test = products.filter(product => product.title === params.productId)
  return (
    <div>
      
    </div>
  )
}

export default Product