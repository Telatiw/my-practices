import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Todo from "./Todo/Todo";
export interface TodoInfo {
  id: number
  title: string
  completed: boolean
  onRemove?: Function
  onEdit?: Function
}
function Todolist() {
  const [todos, setTodos] = useState<TodoInfo[]>([])
  const [status, setStatus] = useState('all')
  const [titleTodo, setTitleTodo] = useState('')
  const AddTodo = () => {
    if (titleTodo.trim()) {
      let newTodo: TodoInfo = { id: todos.length + 1, title: titleTodo, completed: false }
      setTodos([...todos, newTodo])
      setTitleTodo('')
    }
  }
  const ChangeDone = (id: number) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }
  const DeleteTodo = (id: number) => {
    let newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className="w-1/2 flex flex-col gap-6 items-center h-auto">
      <div className="flex w-3/4 gap-4">
        <div className="flex grow">
          <input onKeyDown={e => e.key === 'Enter' && AddTodo()} onChange={(e) => setTitleTodo(e.target.value)} value={titleTodo} className="bg-white w-full rounded-l-sm p-2" type="text" placeholder="Todo..." />
          <div className="bg-white/30 flex items-center p-2">
            <FaPlus onClick={AddTodo} size={30} className="text-white bg-indigo-500 rounded-lg  p-1" />
          </div>
        </div>
        <select onChange={(e) => setStatus(e.target.value)} className="bg-white">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <ul className="w-1/2 *:text-white *:font-semibold *:text-2xl  *:w-full *:bg-slate-500 *:rounded-lg">
        {todos.filter(todo => {
          if (status === 'completed') return todo.completed
          if (status === 'uncompleted') return !todo.completed
          return true
        }).map(todo => (
          <Todo key={todo.id} onRemove={() => DeleteTodo(todo.id)} onEdit={() => ChangeDone(todo.id)} {...todo} />
        ))}
      </ul>
    </div>
  )
}
export default Todolist