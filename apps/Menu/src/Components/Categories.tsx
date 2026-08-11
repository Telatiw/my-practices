import { useState } from "react"
interface ICategoriesProps {
    categories: string[],
    filterMenues:(cat:string)=>void
}
const Categories = ({ categories,filterMenues }: ICategoriesProps) => {
    const [mainCat, setMainCat] = useState('all')
    const handleCategory = (cat:string) => {
        setMainCat(cat)
        filterMenues(cat)
    }
    return (
        <div className="flex w-1/3 justify-between">
            {categories.map(cat => (
                <button onClick={(e) => handleCategory(cat)} key={cat} className={`btnC ${cat === mainCat ? 'bg-amber-700 text-white' : ''}`}>
                    {cat}
                </button>
            ))}
        </div>
    )
}

export default Categories