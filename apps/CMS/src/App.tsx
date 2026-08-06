import { RouterProvider } from "react-router"
import router from "./Routes/Routes"
const App = () => {
  const route = router
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App