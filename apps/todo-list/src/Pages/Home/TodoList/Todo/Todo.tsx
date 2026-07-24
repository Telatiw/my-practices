import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import type {TodoInfo} from '../Todolist'

function Todo({id,completed,title,onEdit,onRemove}:TodoInfo) {
  const selectEdit = (id:number) => {
    onEdit?.(id)
  }
  const selectRemove = (id:number) => {
    onRemove?.(id)
  }
  return (
    <li className="flex  justify-between">
      <span className={`p-2 ${completed && 'line-through text-white/50'}`}>{title}</span>
      <div className="flex">
        <FaCheck onClick={() =>selectEdit(id)} size={35} className="cursor-pointer h-full bg-slate-900 p-2" />
        <FaRegTrashAlt onClick={() => selectRemove(id)} size={35} className="cursor-pointer bg-white/80 text-black h-full p-2 " />
      </div>
    </li>
  )
}

export default Todo