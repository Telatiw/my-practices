import { Component } from 'react'
import Book from './Book/Book'
interface FormState {
    title: string
    author: string
    year: string
    books: {
        id: number
        title: string
        author: string
        year: string
    }[]
}
export class Form extends Component<{}, FormState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            title: '',
            author: '',
            year: '',
            books: []
        }

    }
    AddBook() {
        let newBook = {
            id: this.state.books.length + 1,
            title: this.state.title,
            author: this.state.author,
            year: this.state.year
        }
        this.setState({ books: [...this.state.books, newBook] })
    }
    render() {
        return (
            <div className="w-full h-full">
                <div className="flex flex-col justify-around w-full h-3/4 ">
                    <div>
                        <label className="font-semibold text-lg" htmlFor="Title">Title</label>
                        <input onChange={(e) => this.setState({ title: e.target.value })} value={this.state.title} type="text" className=" abbas rounded-lg " />
                    </div>
                    <div>
                        <label className="font-semibold text-lg" htmlFor="Author">Author</label>
                        <input onChange={(e) => this.setState({ author: e.target.value })} value={this.state.author} type="text" className=" abbas rounded-lg " />
                    </div>
                    <div>
                        <label className="font-semibold text-lg" htmlFor="Year">Year</label>
                        <input onChange={(e) => this.setState({ year: e.target.value })} value={this.state.year} type="text" className=" abbas rounded-lg " />
                    </div>
                    <button onClick={() => this.AddBook()} className="btn text-white">Add Book</button>
                </div>
                <table className="w-full h-auto  bg-slate-600">
                    <thead>
                        <tr>
                            <th>شماره</th>
                            <th>نام کتاب</th>
                            <th>نویسنده</th>
                            <th>سال انتشار</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map(book => <Book key={book.id} {...book} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Form