import React,{Component} from 'react'
interface bookProps {
  id:number
  title:string
  author:string
  year:string
}
export class Book extends Component<bookProps> {
  constructor(props:bookProps){
    super(props)
  }
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
        <td>{this.props.year}</td>
      </tr>
    )
  }
}

export default Book
