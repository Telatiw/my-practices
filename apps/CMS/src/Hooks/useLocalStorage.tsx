import React, { useEffect, useState } from "react"
const useLocalStorage = ():[string,React.Dispatch<React.SetStateAction<string>>] => {
    const [value, setValue] = useState(() => {
        let localData = localStorage.getItem('mamad')
        if (localData) {
            return localData
        } else {
            return ''
        }
    })
    useEffect(() => {
        localStorage.setItem('mamad', value)
    }, [value])
    return [value,setValue]
}

export default useLocalStorage