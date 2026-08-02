import React, { useEffect, useState } from "react"
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import usePagination from "../../Hooks/UsePagination";
interface ITodos {
    id: number
    completed: boolean
    title: string
    userId: number
}
const Home = () => {
    const [loading, setLoding] = useState(true)
    const [todos,setTodos] = useState<ITodos[]>([])
    const {totalPage,backTopre,pages,currentItems,currentPage,goToNext,handlePage} = usePagination(todos,10)
    useEffect(() => {
        // setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(data)
                console.log(todos)
                setLoding(false)
            })
        // }, 4000);
    }, [])
    return (
        <div className="flex w-full min-h-screen flex-col items-center">
            {loading ? <div className="w-full min-h-screen bg-red-400 z-50 flex justify-center items-center">Loding...</div> : (
                <div className="w-2/3 flex flex-col items-center">
                    <table className="table table-sm">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>UserId</th>
                                <th>Title</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(todo => (
                                <tr key={todo.id}>
                                    <th>{todo.id}</th>
                                    <td>{todo.userId}</td>
                                    <td>{todo.title}</td>
                                    <td><span className={` btn ${todo.completed ? 'btn-success' : 'btn-error'}`}>{todo.completed ? 'completed' : 'inCompleted'}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-around   ">
                        <button onClick={backTopre} className="btn"><MdOutlineKeyboardArrowLeft size={20} /></button>
                        {pages.map(page => (
                            <button onClick={e => handlePage(page)} key={page} className="btn ">{page}</button>
                        ))}
                        <button onClick={goToNext} className="btn"><MdKeyboardArrowRight size={20} /></button>
                    </div>
                </div>
            )}
        </div>
    )
}


export default Home