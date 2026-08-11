interface IMenuProps {
  menues: {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }[]
}
const Menu = ({ menues }: IMenuProps) => {
  return (
    <div className="grid w-8/12 gap-15 grid-cols-2 auto-rows-[300px] aspect-square">
      {menues.map(menu => (
        <article className="flex rounded-lg flex-col justify-between bg-slate-500 overflow-hidden">
          <img className=" w-full h-2/3" src={menu.img} alt={menu.title} />
          <div className="h-1/3 p-1">
            <header className="flex justify-between">
              <h4>{menu.title}</h4>
              <h4>${menu.price}</h4>
            </header>
            <p>{menu.desc}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Menu