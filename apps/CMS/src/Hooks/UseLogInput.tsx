import { useEffect, useState } from "react"

const useLogInput = (title: string): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const [worth, setWorth] = useState(title)

    useEffect(() => {
        console.log(worth)
    }, [worth])

    return [worth, setWorth]
}

export default useLogInput