import { Component } from 'react'
import Header from './Header/Header'
import Form from './Form/Form'
export class Home extends Component {
  render() {
    return (
      <div className=' flex flex-col  items-center min-h-screen w-[90%]'>
        <Header />
        <Form />
      </div>
    )
  }
}
export default Home