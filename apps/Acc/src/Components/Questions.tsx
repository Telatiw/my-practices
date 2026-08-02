import { useState } from "react"
import WithToggle from '../HOCs/WithToggle'
const Questions = ({id,info,isShow,title,toggle}:{id:number,info:string,title:string,isShow:boolean,toggle:()=>void}) => {
    return (
        <article className="rounded-lg py-1 px-2  flex flex-col justify-center border-indigo-400 border text-white">
            <header className="flex justify-between items-center">
                <h4 className="font-semibold">{title}</h4>
                <button onClick={toggle} className='rounded-full cup size-8 bg-pink-400'>{isShow ? '-' : '+'}</button>
            </header>
            {isShow && <p>{info}</p>}

        </article>
    )
}

export default WithToggle(Questions)