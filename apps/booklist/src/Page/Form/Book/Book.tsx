interface bookProps {
  id:number
  title:string
  author:string
  year:string
}
function Book ({id,author,title,year}:bookProps){
    return (
      <tr className='even:bg-slate-300 text-center *:capitalize *:font-semibold odd:bg-slate-200 *:p-2'>
        <td>{id}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{year}</td>
      </tr>
    )
}

export default Book
