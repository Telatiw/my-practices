import { Outlet } from 'react-router'
import React from 'react'

function Layout() {
  return (
    <div className='w-full flex justify-center'>
      <Outlet />
    </div>
  )
}

export default Layout