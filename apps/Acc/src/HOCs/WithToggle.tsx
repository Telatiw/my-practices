import type React from "react"
import { useState } from "react"
interface IQuestion {
    id: number
    title: string
    info: string
}
interface toggleProps {
    isShow:boolean
    toggle:()=> void
}
const WithToggle = (OrgComp: React.FC<toggleProps & IQuestion>) => {
    const newComp = (props:IQuestion) => {
        const [isShow, setIsShow] = useState(false)
        const toggleHandler = () => {
            setIsShow(pre => !pre)
        }
        return <OrgComp {...props} isShow={isShow} toggle={toggleHandler} />
    }
    return newComp
}

export default WithToggle