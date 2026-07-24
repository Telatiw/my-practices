import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaEraser } from "react-icons/fa6";
import ColorBox from "./ColorBox/ColorBox";
import Note from "./Note/Note";
function NoteApp() {
  const [colors, setColors] = useState([
    '#d33535',
    '#c99929',
    '#1ec1d3',
    '#d424e4',
    '#20cc37',
    '#5184e2',
    '#e0369f',
  ])
  const [noteTitle, setNoteTitle] = useState('')
  const [notes, setNotes] = useState<{ id: number, title: string, bgcolor: string }[]>([])
  const [inputColor, setInputColor] = useState('#fff')
  const changeColor = (color: string) => {
    setInputColor(color)
    inputRef.current?.focus()
  }
  const inputRef = useRef<HTMLInputElement>(null)
  const addNote = () => {
    if (noteTitle.trim()) {
      let newNote = { id: notes.length + 1, title: noteTitle, bgcolor: inputColor }
      setNotes([...notes, newNote])
      setNoteTitle('')
      setInputColor('#fff')
    }
  }
  const RemoveNote = (noteId:number) => {
    let newNotes = notes.filter(note => note.id !== noteId)
    setNotes(newNotes)
  }
  function removeAllNotes () {
    setNotes([])
  }
  return (
    <div className="w-3/4 flex flex-col items-center h-auto">
      <div className="w-7/12 flex flex-col gap-5 mt-6">
        <h2 className="text-6xl font-semibold text-center text-nowrap">Mohammad Notes</h2>
        <div className="flex gap-2 flex-col">
          <input ref={inputRef} onKeyDown={(e) => e.key === 'Enter' && addNote()} onChange={(e) => setNoteTitle(e.target.value)} value={noteTitle} style={{ backgroundColor: inputColor }} className="w-full p-2 bg-white rounded-lg" placeholder="Note..." type="text" />
          <ul className="flex gap-2 justify-between w-1/3">
            {colors.map((color, index) => (
              <ColorBox key={index} bgColor={color} changing={() => changeColor(color)} />
            ))}
          </ul>
          <div className="flex gap-2 justify-end ">
            <button onClick={addNote} className=" cursor-pointer p-3 rounded-lg  bg-red-500"><FaPlus size={25} /></button>
            <button onClick={removeAllNotes} className=" cursor-pointer p-3 rounded-lg  bg-blue-400"><FaEraser size={25} /></button>
          </div>
        </div>
      </div>
      <div className="w-full p-2 gap-x-15 gap-y-5  grid grid-cols-3 auto-rows-fr ">
        {notes.map(note => (
          <Note onRemove={() => RemoveNote(note.id)} key={note.id} {...note} />
        ))}
      </div>
    </div>
  )
}
export default NoteApp