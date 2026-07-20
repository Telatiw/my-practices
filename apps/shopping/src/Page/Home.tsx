import Header from "./Header/Header"
import Shop from "./Shop/Shop"
function Home() {
  return (
    <div className="w-full flex items-center flex-col min-h-screen">
      <Header />
      <Shop />
    </div>
  )
}
export default Home