import Cart from "./Components/Cart.tsx"
import ProductSection from "./Components/ProductSection.tsx"
import Toast from "./Components/Toast.tsx"
import { shedProducts } from "./Data/Products.tsx"
import NavBar from "./Layout/NavBar.tsx"
import { useProductStore as useProduct } from "./Store/ProductsStore.tsx"
const App = () => {
  const { isShowToast } = useProduct()
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {isShowToast && (
        <Toast />
      )}
      <div className="flex relative">
        <div className="w-1/4 fixed top-0">
          <Cart />
        </div>
        <main className="flex-1 w-1/2 mt-4">
          <h1 className="text-4xl text-third font-medium text-center">All Products</h1>
          <div className="flex flex-col gap-5">
            {Object.entries(shedProducts)[0][1].map(lap => (
              <ProductSection key={lap.id} {...lap} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App