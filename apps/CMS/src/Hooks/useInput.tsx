import React, { useState, type InputHTMLAttributes } from "react"
const useInput = (init:string): [string,React.InputHTMLAttributes<HTMLInputElement>,()=> void] => {
    const [value, setValue] = useState(init)
    const resValue = () => {
        setValue('')
    }
    const binding:React.InputHTMLAttributes<HTMLInputElement> = {
        value,
        onChange: (e:React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
        }
    }

    return [value,binding,resValue]
}

export default useInput