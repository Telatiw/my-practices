import { useState } from "react"
import menues from "./Data/Data.tsx"
import Categories from "./Components/Categories.tsx"
import Menu from "./Components/Menu.tsx"
const allCategories = ['all', ...new Set(menues.map(cat => cat.category))]
console.log(allCategories)
const App = () => {
  const [allMenues, setAllMenues] = useState<{
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }[]>(menues)
  const [categories, setCategories] = useState(allCategories)
  const filterMenues = (category:string) => {
    if(category === 'all'){
      setAllMenues(menues)
      return
    }
    let filteredMenues = menues.filter(menu => menu.category === category)
    setAllMenues(filteredMenues)
  }
  return (
    <main className="w-full min-h-screen bg-slate-300 flex justify-center">
      <section className="mt-4 flex flex-col items-center gap-y-2">
        <div className="">
          <h2 className=" pb-4 border-b-2 w-full text-6xl text-center font-medium">Our Menu</h2>
        </div>
        <Categories  filterMenues={filterMenues} categories={categories} />
        <Menu menues={allMenues} />
      </section>
    </main>
  )
}

export default App