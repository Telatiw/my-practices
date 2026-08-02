import { useEffect, useState } from "react"
const usePagination = <T,>(data: T[], itemsPerPage: number) => {
    const totalPage = Math.ceil(data.length / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentItems, setCurrentItems] = useState<T[]>([])
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const pages = []
    useEffect(() => {
        const items = data.slice(startIndex, endIndex)
        setCurrentItems(items)
    }, [currentPage, data])
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i)
    }
    const handlePage = (page: number) => {
        setCurrentPage(page)
    }
    const goToNext = () => {
        if (currentPage < totalPage) {
            setCurrentPage(pre => pre + 1)
        }
    }
    const backTopre = () => {
        if (currentPage > 1) {
            setCurrentPage(pre => pre - 1)
        }
    }
    return { totalPage, currentItems, pages, currentPage, handlePage, goToNext, backTopre }
}
export default usePagination