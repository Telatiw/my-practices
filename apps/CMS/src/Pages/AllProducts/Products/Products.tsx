import { Link } from "react-router"

interface IProduct {
  img: string
  title: string
  price: string
  count: number
}
const Products = ({ count, img, price, title }: IProduct) => {
  return (
    <div className="flex w-full rounded-lg p-2 aspect-square items-center flex-col">
      <h3 className="text-2xl font-semibold text-center">{title}</h3>
      <div className="w-full h-2/3"><img className="w-full h-full" src={img} alt={title} /></div>
      <div className="bg-slate-100 w-full flex flex-col py-2 rounded-lg items-center">
        <div className=" bg-slate-100 flex justify-around w-full">
            <span className="font-medium">Count: ${count}</span>
            <span className="font-medium">Price: ${price}</span>
        </div>
        <Link to={`/product/${title}`}><button className="btn bg-yellow-300 px-4 ">Add</button></Link>
      </div>
    </div>
  )
}
export default Products