import { useRoutes } from 'react-router'
import router from './Router/Router'
function App() {
  let routers = useRoutes(router)
  return (
    <div className='bg-slate-200 h-screen w-screen'>
      {routers}
    </div>
  )
}

export default App