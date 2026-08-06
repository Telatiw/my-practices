import { Outlet } from "react-router"
import NavBar from "./NavBar/NavBar"
import SideBar from "./SideBar/SideBar"
const Layout = () => {
  return (
    <div className="w-full flex min-h-screen flex-col ">
      <NavBar />
      <div className=" flex w-full  grow">
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
