import Layout from "../Layout/Layout";
import Home from "../Page/Home";

const router = [
{
    path:'/',element: <Layout /> ,children:[
        {index:true,path:'/',element: <Home /> },
    ]
}
]

export default router