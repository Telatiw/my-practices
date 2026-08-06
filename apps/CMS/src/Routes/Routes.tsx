import {createBrowserRouter} from 'react-router'
import Layout from '../Layout/Layout'
import Home from '../Pages/Home/Home'
import Users from '../Pages/Users/Users'
import Products from '../Pages/AllProducts/AllProducts'
import NewUser from '../Pages/NewUser/NewUser'
import Product from '../Pages/AllProducts/Products/Product/Product'
const router = createBrowserRouter([
    {path:'/',Component:Layout,children:[
        {index:true,Component:Home},
        {path:'users',Component:Users},
        {path:'products',Component:Products},
        {path:'newuser',Component:NewUser},
        {path:'/product/:productId', Component:Product}
    ]}
])

export default router