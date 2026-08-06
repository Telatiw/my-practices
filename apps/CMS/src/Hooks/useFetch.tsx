import React, { useEffect, useState } from 'react'
interface IPost {
    id: number
    body: string
    title: string
    userId: number
}
const useFetch = (url: string): [IPost[], boolean, string | null] => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [pending, setPending] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setPosts(data)
                    setPending(false)
                    setError(null)
                }).catch(err => console.log(err))
        }, [])
    return [posts, pending, error]
}

export default useFetch