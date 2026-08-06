import { useState } from "react"
const useCounter = (init:number): [number,()=>void,()=>void] => {
    const [count, setCount] = useState(init)
    const addCount = () => {
        setCount(state => state + 1)
    }
    const subtractCount = () => {
        setCount(state => state - 1)
    }
    return [count, addCount, subtractCount]
}
export default useCounter