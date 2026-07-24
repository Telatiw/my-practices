
function ColorBox({bgColor,changing}:{bgColor:string,changing:Function}) {
  const replaceColor = (uniqColor:string) => {
    changing(uniqColor)
  }
  return (
              <li onClick={() => replaceColor(bgColor)} className='p-3 cursor-pointer rounded-full hover:scale-115 transition-transform' style={{backgroundColor:bgColor}} ></li>
  )
}

export default ColorBox