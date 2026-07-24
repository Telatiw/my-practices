function Note({ id, title, bgcolor, onRemove }: { id: number, title: string, bgcolor: string, onRemove: Function }) {
  const deleteNote = (uniqId: number) => {
    onRemove(uniqId)
  }
  return (
    <div onClick={() => deleteNote(id)} style={{ backgroundColor: bgcolor }} className="cursor-pointer p-2 rounded-lg flex justify-center items-center font-semibold text-2xl">
      {title}
    </div>
  )
}

export default Note