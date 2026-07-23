import {  useState } from 'react'
import Book from './Book/Book'
interface BookInfo {
        id: number
        title: string
        author: string
        year: string
}
function Form() {
    let [title, setTitle] = useState('')
    let [author, setAuthor] = useState('')
    let [year, setYear] = useState('')
    let [books, setBooks] = useState<BookInfo[]>([
        { id: 1, title: 'abbas', author: 'rezaei', year: '3243' },
        { id: 2, title: 'mamad', author: 'javadi', year: '4264' },
    ])
    const AddBook = () => {
        let newBook = {
            id: books.length + 1,
            title: title,
            author: author,
            year: year
        }
        if (title.trim() && author.trim() && year.trim()) {
            setBooks([...books , newBook])
            setAuthor('')
            setTitle('')
            setYear('')
        }
    }
    return (
        <div className="w-full flex flex-col gap-y-10 h-full">
            <div className="flex flex-col justify-between w-full h-3/4 ">
                <div>
                    <label className="font-semibold text-lg" htmlFor="Title">Title</label>
                    <input onChange={(e) => setTitle( e.target.value )} value={title} type="text" className=" abbas rounded-lg " />
                </div>
                <div>
                    <label className="font-semibold text-lg" htmlFor="Author">Author</label>
                    <input onChange={(e) => setAuthor( e.target.value )} value={author} type="text" className=" abbas rounded-lg " />
                </div>
                <div>
                    <label className="font-semibold text-lg" htmlFor="Year">Year</label>
                    <input onChange={(e) => setYear(e.target.value )} value={year} type="text" className=" abbas rounded-lg " />
                </div>
                <button onClick={() => AddBook()} className="btn text-white">Add Book</button>
            </div>
            <table className="w-full outline outline-slate-300 h-auto rounded-lg overflow-hidden ">
                <thead className='rounded-lg'>
                    <tr className='bg-slate-400 rounded-lg *:p-2'>
                        <th>شماره</th>
                        <th>نام کتاب</th>
                        <th>نویسنده</th>
                        <th>سال انتشار</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => <Book key={book.id} {...book} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Form

