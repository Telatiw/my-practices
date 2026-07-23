import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className='w-full flex justify-center'>
      <Outlet />
    </div>
  )
}

export default Layout