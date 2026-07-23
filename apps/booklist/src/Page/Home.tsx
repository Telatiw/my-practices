import Header from './Header/Header'
import Form from './Form/Form'
function Home () {
    return (
      <div className=' flex flex-col  items-center min-h-screen w-[90%]'>
        <Header />
        <Form />
      </div>
    )
}
export default Home